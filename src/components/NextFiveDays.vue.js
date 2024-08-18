import Card from '../components/Card.vue';
export default (await import('vue')).defineComponent({
    name: "NextFiveDays",
    props: {
        weatherForecastHistory: {
            type: Object,
            required: true,
        },
    },
    computed: {
        filteredForecasts() {
            return this.filterDailyForecasts(this.weatherForecastHistory?.list);
        },
    },
    components: {
        Card
    },
    methods: {
        filterDailyForecasts(weatherData) {
            const filteredData = weatherData?.filter((item) => {
                // Extract the hour and day part of the date string
                const hour = new Date(item.dt_txt).getHours();
                const day = new Date(item.dt_txt).getDate();
                // Return the item where hour is 12:00 PM (adjust as needed)
                return hour === 15;
            });
            return filteredData;
        },
        getShorthandDay(dateTime) {
            const inputDate = new Date(dateTime);
            const today = new Date();
            // Check if the dateTime is today
            if (inputDate.getDate() === today.getDate() &&
                inputDate.getMonth() === today.getMonth() &&
                inputDate.getFullYear() === today.getFullYear()) {
                return "Now";
            }
            // If not today, return the day of the week
            return inputDate.toLocaleDateString('en-US', { weekday: 'long' });
        },
        convertDateToTime(dt) {
            // Your logic to convert date to time
            const date = new Date(dt * 1000); // Convert seconds to milliseconds
            const hours = date.getUTCHours().toString().padStart(2, '0');
            const minutes = date.getUTCMinutes().toString().padStart(2, '0');
            const formattedTime = `${hours}:${minutes} UTC`;
            return formattedTime;
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
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({});
    __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({ ...{ class: ("text-[12px] text-light mb-2 text-gray-100") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("grid md:grid-cols-5 grid-cols-1 justify-center items-center gap-4 rounded-md") }, });
    for (const [list] of __VLS_getVForSourceType((__VLS_ctx.filteredForecasts))) {
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ key: ((list.dt)), });
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
        __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({ ...{ class: ("text-sm text-center") }, });
        (__VLS_ctx.getShorthandDay(list?.dt_txt));
        // @ts-ignore
        [filteredForecasts, getShorthandDay,];
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("items-center flex justify-center") }, });
        __VLS_elementAsFunction(__VLS_intrinsicElements.img)({ src: ((`https://openweathermap.org/img/wn/${list.weather[0].icon}.png`)), alt: ("this is weather img"), });
        __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({ ...{ class: ("text-center") }, });
        (__VLS_ctx.convertDateToTime(list.dt));
        // @ts-ignore
        [convertDateToTime,];
        __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({ ...{ class: ("text-[12px] text-center font-extralight") }, });
        (Math.round(list.main.temp - 273.15));
        __VLS_nonNullable(__VLS_5.slots).default;
    }
    if (typeof __VLS_styleScopedClasses === 'object' && !Array.isArray(__VLS_styleScopedClasses)) {
        __VLS_styleScopedClasses['text-[12px]'];
        __VLS_styleScopedClasses['text-light'];
        __VLS_styleScopedClasses['mb-2'];
        __VLS_styleScopedClasses['text-gray-100'];
        __VLS_styleScopedClasses['grid'];
        __VLS_styleScopedClasses['md:grid-cols-5'];
        __VLS_styleScopedClasses['grid-cols-1'];
        __VLS_styleScopedClasses['justify-center'];
        __VLS_styleScopedClasses['items-center'];
        __VLS_styleScopedClasses['gap-4'];
        __VLS_styleScopedClasses['rounded-md'];
        __VLS_styleScopedClasses['text-sm'];
        __VLS_styleScopedClasses['text-center'];
        __VLS_styleScopedClasses['items-center'];
        __VLS_styleScopedClasses['flex'];
        __VLS_styleScopedClasses['justify-center'];
        __VLS_styleScopedClasses['text-center'];
        __VLS_styleScopedClasses['text-[12px]'];
        __VLS_styleScopedClasses['text-center'];
        __VLS_styleScopedClasses['font-extralight'];
    }
    var __VLS_slots;
    return __VLS_slots;
    const __VLS_componentsOption = {
        Card
    };
    const __VLS_name = "NextFiveDays";
    let __VLS_internalComponent;
}
