const injectedScroll = inject<Ref<number>>('scrollValue', ref(0));
const shouldRenderBlock = (ANIMATION_START: number): boolean => {
        return injectedScroll.value > ANIMATION_START ;
}
export default shouldRenderBlock


