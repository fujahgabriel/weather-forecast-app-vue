export default (await import('vue')).defineComponent({
    name: "CustomSearch",
    props: {
        modelValue: {
            type: String,
            default: "",
        },
        placeholder: {
            type: String,
            default: "Search...",
        },
    },
    computed: {
        inputValue: {
            get() {
                return this.modelValue;
            },
            set(value) {
                this.$emit("update:modelValue", value);
            },
        },
    },
    methods: {
        onInput(event) {
            this.$emit("input", event.target.value);
        },
    },
});
;
function __VLS_template() {
    let __VLS_ctx;
    /* Components */
    let __VLS_otherComponents;
    let __VLS_own;
    let __VLS_localComponents;
    let __VLS_components;
    let __VLS_styleScopedClasses;
    // CSS variable injection 
    // CSS variable injection end 
    let __VLS_resolvedLocalAndGlobalComponents;
    __VLS_elementAsFunction(__VLS_intrinsicElements.input)({ ...{ onInput: (__VLS_ctx.onInput) }, type: ("text"), value: ((__VLS_ctx.inputValue)), placeholder: ((__VLS_ctx.placeholder)), ...{ class: ("bg-gray-100 p-3 md:w-[400px] w-full rounded-lg focus:outline-none") }, });
    // @ts-ignore
    [onInput, inputValue, placeholder,];
    if (typeof __VLS_styleScopedClasses === 'object' && !Array.isArray(__VLS_styleScopedClasses)) {
        __VLS_styleScopedClasses['bg-gray-100'];
        __VLS_styleScopedClasses['p-3'];
        __VLS_styleScopedClasses['md:w-[400px]'];
        __VLS_styleScopedClasses['w-full'];
        __VLS_styleScopedClasses['rounded-lg'];
        __VLS_styleScopedClasses['focus:outline-none'];
    }
    var __VLS_slots;
    return __VLS_slots;
    const __VLS_componentsOption = {};
    const __VLS_name = "CustomSearch";
    let __VLS_internalComponent;
}
