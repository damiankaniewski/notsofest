import { ref, onMounted, onUnmounted} from "vue";

export function calculateCountdown(targetDate) {
    const timeRemaining = ref("");

    let interval;

    const updateTime = () => {
        const now = new Date().getTime();
        const timeToEvent = targetDate.getTime() - now;
        
        if (timeToEvent <= 0) {
            timeRemaining.value = "Wydarzenie już trwa!";
            return;
        }

        const days = Math.floor(timeToEvent / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeToEvent % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeToEvent % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeToEvent % (1000 * 60)) / 1000);
        timeRemaining.value = `${days} dni: ${hours} godzin: ${minutes} minut<br>${seconds} sekund`;
    };

    onMounted(() => {
        updateTime();
        interval = setInterval(updateTime, 1000);
    });

    onUnmounted(() => {
        clearInterval(interval);
    });

    return { timeRemaining };
}