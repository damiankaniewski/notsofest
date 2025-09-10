<template>
    <div ref="textRef">
        <motion.span
            v-for="(word, i) in words"
            class="word"
            :key="i"
            :initial="{ opacity: 0, scale: 1.4}"
            :animate="inView ? { opacity: 1, scale: 1.0} : { opacity: 0, scale: 1.4}"
            :transition="{ duration: 1.8, delay: delayValue + i * 0.02, type: spring, stiffness: 120}"
        >          
            {{ word }}
        </motion.span>
    </div>
</template>

<script setup> 
    import { ref, onMounted} from "vue"
    import { delay, motion, spring } from "motion-v";

    
    const props = defineProps({
        text: { type: String, required: true},
        delay: { type: Number, default: 0}
    })
    
    const words = props.text.split(/(\s+)/).filter(Boolean);
    const delayValue = Number(props.delay) || 0;

    const inView = ref(false);
    const textRef = ref(null);

    onMounted(() => {
        const observer = new IntersectionObserver(([entry]) => {
            if (entry.isIntersecting) {
                inView.value = true;
                observer.disconnect();
            }
        }, { threshold: 0.1});
        if (textRef.value) observer.observe(textRef.value);
    });

</script>

<style lang="scss" scoped>
    .word {
        font-size: inherit;
        display: inline;
    }
</style>