import CustomSearch from "@/components/CustomSearch.vue";
export default (await import('vue')).defineComponent({
    components: {
        CustomSearch,
    },
    data() {
        return {
            searchValue: "",
        };
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
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({});
    // @ts-ignore
    const __VLS_0 = {}
        .CustomSearch;
    ({}.CustomSearch);
    __VLS_components.CustomSearch;
    // @ts-ignore
    [CustomSearch,];
    // @ts-ignore
    const __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0({ modelValue: ((__VLS_ctx.searchValue)), placeholder: ("Enter a search term"), }));
    const __VLS_2 = __VLS_1({ modelValue: ((__VLS_ctx.searchValue)), placeholder: ("Enter a search term"), }, ...__VLS_functionalComponentArgsRest(__VLS_1));
    ({}({ modelValue: ((__VLS_ctx.searchValue)), placeholder: ("Enter a search term"), }));
    const __VLS_5 = __VLS_nonNullable(__VLS_pickFunctionalComponentCtx(__VLS_0, __VLS_2));
    // @ts-ignore
    [searchValue,];
    __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({});
    (__VLS_ctx.searchValue);
    // @ts-ignore
    [searchValue,];
    if (typeof __VLS_styleScopedClasses === 'object' && !Array.isArray(__VLS_styleScopedClasses)) {
    }
    var __VLS_slots;
    return __VLS_slots;
    const __VLS_componentsOption = {
        CustomSearch,
    };
    const __VLS_name = undefined;
    let __VLS_internalComponent;
}
