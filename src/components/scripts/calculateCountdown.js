import { ref, onMounted, onUnmounted} from "vue";

export function calculateCountdown(targetDate) {

    const timeRemaining = ref("");
    let interval = null;

    const updateTime = () => {
        const now = new Date().getTime();
        let timeToEvent = Math.floor((targetDate.getTime() - now) / 1000);
        
        if (timeToEvent <= 0) {
            timeRemaining.value = "Wydarzenie już trwa!";
            clearInterval(interval);
            return;
        }

        const days = Math.floor(timeToEvent / 86400);
        const hours = Math.floor((timeToEvent % 86400) / 3600); 
        const minutes = Math.floor((timeToEvent % 3600) / 60);
        const seconds = timeToEvent % 60;
        timeRemaining.value = `${days} dni<br> ${hours} godzin<br> ${minutes} minut<br>${seconds} sekund`;
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