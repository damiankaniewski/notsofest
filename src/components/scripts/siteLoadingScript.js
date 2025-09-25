import { ref, watch, onMounted, onUnmounted } from "vue";

export function loadingStatus(introPion, intro){

    const introLoaded = ref(false);
    const backgroundLoaded = ref(false);
    const videoEnded = ref(false);
    const minLoadingTime = ref(false);
    const startAnimation = ref(false);
    const animationEnded = ref(false);

    const currentIntro = ref(intro); 

    const introWasAlreadyPlayed = sessionStorage.getItem("IntroPlayed") === "true";

    const updateVideo = () => {
        currentIntro.value = window.innerWidth <= 1024 ? introPion : intro;
    };

    const handleVideoLoad = () => {
        introLoaded.value = true;
    };

    const handleBackgroundLoad = () => {
        backgroundLoaded.value = true;
    };

    const handleVideoEnd = () => {
        videoEnded.value = true;
        sessionStorage.setItem("IntroPlayed", "true");
    };

    const handleAnimationEnd = () => {
        animationEnded.value = true;
    };

    watch([introLoaded, backgroundLoaded, minLoadingTime], ([intro, bg, time]) => {
    if (intro && bg && time) {
        startAnimation.value = true;
    }
    });

    onMounted(() => {
        updateVideo();
        window.addEventListener("resize", updateVideo);

        setTimeout(() => {
            minLoadingTime.value = true;
            window.addEventListener("keydown", handleVideoEnd);
            window.addEventListener("wheel", handleVideoEnd);

            if (introWasAlreadyPlayed) {
            videoEnded.value = true;
            introLoaded.value = true;
        }
        }, 800);
    });

    onUnmounted(() => {
        window.removeEventListener("resize", updateVideo);
        window.removeEventListener("keydown", handleVideoEnd);
        window.removeEventListener("wheel", handleVideoEnd);
    });


    return {
        videoEnded,
        startAnimation,
        animationEnded,
        currentIntro,
        handleVideoLoad,
        handleBackgroundLoad,
        handleVideoEnd,
        handleAnimationEnd,
    };
}

