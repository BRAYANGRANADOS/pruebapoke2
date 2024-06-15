class LoadingScreenManager {
    constructor(loadingScreenId, baseSelector, loadingScreenTime, baseLoadingTime) {
        this.loadingScreen = document.getElementById(loadingScreenId);
        this.base = document.querySelector(baseSelector);
        this.loadingScreenTime = loadingScreenTime;
        this.baseLoadingTime = baseLoadingTime;
    }

    showLoadingScreen() {
        this.loadingScreen.style.display = "flex";
        this.base.style.display = "none";
    }

    hideLoadingScreen() {
        this.loadingScreen.style.display = "none";
        this.base.style.display = "flex";
    }

    start() {
        this.showLoadingScreen();

        // Mostrar la pantalla de carga durante loadingScreenTime milisegundos (5 segundos)
        setTimeout(() => {
            // Ocultar la pantalla de carga después de loadingScreenTime milisegundos
            this.hideLoadingScreen();
            
            // Mostrar el loading de la clase base durante baseLoadingTime milisegundos (20 segundos)
            setTimeout(() => {
                // Redirigir al index.html después de baseLoadingTime milisegundos (20 segundos)
                window.location.href = 'index.html'; // Ajusta la ruta si es necesario
            }, this.baseLoadingTime);
        }, this.loadingScreenTime);
    }
}

document.addEventListener("DOMContentLoaded", () => {
    const loadingScreenManager = new LoadingScreenManager("loadingScreen", ".base", 5000, 20000);
    // loadingScreenTime se ajusta a 5000 para 5 segundos
    // baseLoadingTime se ajusta a 20000 para 20 segundos
    loadingScreenManager.start();
});
