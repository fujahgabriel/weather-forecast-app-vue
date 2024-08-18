import Card from './Card.vue';
export default (await import('vue')).defineComponent({
    name: 'MainForecast',
    props: {
        icon: {
            required: true
        },
        temperature: {
            required: true
        },
        description: {
            required: true
        },
        locationName: {
            required: true
        },
        dateTime: {
            required: true
        },
        windSpeed: {
            required: true
        }
    },
    components: {
        Card
    },
    computed: {
        iconUrl() {
            return `https://openweathermap.org/img/wn/${this.icon}@4x.png`;
        },
        formattedDate() {
            return this.convertDateToTime(this.dateTime);
        }
    },
    methods: {
        convertDateToTime(timestamp) {
            const date = new Date(timestamp * 1000); // Convert seconds to milliseconds
            const hours = date.getUTCHours().toString().padStart(2, '0');
            const minutes = date.getUTCMinutes().toString().padStart(2, '0');
            const formattedTime = `${hours}:${minutes} UTC`;
            return formattedTime;
        }
    }
});
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
    // @ts-ignore
    const __VLS_0 = {}
        .Card;
    ({}.Card);
    ({}.Card);
    __VLS_components.Card;
    __VLS_components.Card;
    // @ts-ignore
    [Card, Card,];
    // @ts-ignore
    const __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0({}));
    const __VLS_2 = __VLS_1({}, ...__VLS_functionalComponentArgsRest(__VLS_1));
    ({}({}));
    const __VLS_5 = __VLS_nonNullable(__VLS_pickFunctionalComponentCtx(__VLS_0, __VLS_2));
    __VLS_elementAsFunction(__VLS_intrinsicElements.img)({ src: ((__VLS_ctx.iconUrl)), alt: ("Weather Icon"), });
    // @ts-ignore
    [iconUrl,];
    __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({ ...{ class: ("md:text-[70px] text-2xl font-extralight") }, });
    (__VLS_ctx.temperature);
    // @ts-ignore
    [temperature,];
    __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({ ...{ class: ("text-lg mt-7") }, });
    (__VLS_ctx.locationName);
    // @ts-ignore
    [locationName,];
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("mt-2 mb-5") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({});
    (__VLS_ctx.formattedDate);
    // @ts-ignore
    [formattedDate,];
    __VLS_elementAsFunction(__VLS_intrinsicElements.hr)({});
    __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({ ...{ class: ("capitalize mt-4") }, });
    (__VLS_ctx.description);
    // @ts-ignore
    [description,];
    __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({});
    (__VLS_ctx.windSpeed);
    // @ts-ignore
    [windSpeed,];
    __VLS_nonNullable(__VLS_5.slots).default;
    if (typeof __VLS_styleScopedClasses === 'object' && !Array.isArray(__VLS_styleScopedClasses)) {
        __VLS_styleScopedClasses['md:text-[70px]'];
        __VLS_styleScopedClasses['text-2xl'];
        __VLS_styleScopedClasses['font-extralight'];
        __VLS_styleScopedClasses['text-lg'];
        __VLS_styleScopedClasses['mt-7'];
        __VLS_styleScopedClasses['mt-2'];
        __VLS_styleScopedClasses['mb-5'];
        __VLS_styleScopedClasses['capitalize'];
        __VLS_styleScopedClasses['mt-4'];
    }
    var __VLS_slots;
    return __VLS_slots;
    const __VLS_componentsOption = {
        Card
    };
    const __VLS_name = 'MainForecast';
    let __VLS_internalComponent;
}
