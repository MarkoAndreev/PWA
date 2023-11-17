const butInstall = document.getElementById('buttonInstall');

// Logic for installing the PWA
window.addEventListener('beforeinstallprompt', (event) => {
    //store the triggered events
    window.defferdPrompt = event;
    //show the install button by removing the hidden class
    butInstall.classList.toggle('hidden', false);
});

butInstall.addEventListener('click', async () => {
    const promptEvent = window.defferdPrompt;
    if (!promptEvent) {
        return;
    }
    //show the prompt
    promptEvent.prompt();

    //wait for the user to respond to the prompt
    window.defferredPrompt = null;

    butInstall.classList.toggle('hidden', false);
});

window.addEventListener('appinstalled', (event) => {
    //hide the install button
    window.defferdPrompt = null;
});