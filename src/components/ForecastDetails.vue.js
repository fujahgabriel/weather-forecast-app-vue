import sunriseIcon from '../assets/sunrise.png';
import humidityIcon from '../assets/humidity.jpeg';
import pressureIcon from '../assets/pressure.png';
export default (await import('vue')).defineComponent({
    name: 'ForecastDetails',
    props: {
        sunrise: {
            required: true
        },
        sunset: {
            required: true
        },
        temperature: {
            required: true
        },
        humidity: {
            required: true
        },
        pressure: {
            required: true
        },
        minTemperature: {
            required: true
        },
        maxTemperature: {
            required: true
        }
    },
    computed: {
        details() {
            return [
                {
                    title: 'SUNRISE',
                    icon: sunriseIcon,
                    value: this.convertDateToTime(this.sunrise)
                },
                {
                    title: 'SUNSET',
                    icon: sunriseIcon,
                    value: this.convertDateToTime(this.sunset)
                },
                {
                    title: 'HUMIDITY',
                    icon: humidityIcon,
                    value: `${this.humidity}%`,
                    description: `The dew point is ${this.calculateDewPoint(this.temperature, this.humidity)}° right now`
                },
                {
                    title: 'PRESSURE',
                    icon: pressureIcon,
                    value: `${this.pressure} hPa`
                },
                {
                    title: 'MIN TEMPERATURE',
                    value: `${this.minTemperature}°`,
                    description: `The dew point is ${this.calculateDewPoint(this.temperature, this.humidity)}° right now`
                },
                {
                    title: 'MAX TEMPERATURE',
                    value: `${this.maxTemperature}°`,
                    description: `The dew point is ${this.calculateDewPoint(this.temperature, this.humidity)}° right now`
                }
            ];
        }
    },
    methods: {
        convertDateToTime(dt) {
            // Your logic to convert date to time
            return new Date(dt * 1000).toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' });
        },
        calculateDewPoint(temperatureCelsius, humidity) {
            // Constants for the Magnus formula
            const a = 17.27;
            const b = 237.7;
            // Calculate the alpha value
            const alpha = (a * temperatureCelsius) / (b + temperatureCelsius) + Math.log(humidity / 100);
            // Calculate the dew point using the Magnus formula
            const dewPoint = (b * alpha) / (a - alpha);
            return dewPoint.toFixed(2);
        },
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
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("grid md:grid-cols-2 gap-2") }, });
    for (const [detail] of __VLS_getVForSourceType((__VLS_ctx.details))) {
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ key: ((detail.title)), ...{ class: ("bg-white shadow-md border rounded-md p-3 h-[180px] flex flex-col justify-between") }, });
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("mt-1") }, });
        if (detail.icon) {
            __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("flex gap-2 items-center") }, });
            __VLS_elementAsFunction(__VLS_intrinsicElements.img)({ src: ((detail.icon)), width: ((detail.iconWidth || 20)), alt: ("this is a weather icon"), });
            // @ts-ignore
            [details,];
            __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({ ...{ class: ("text-xs") }, });
            (detail.title);
        }
        else {
            __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({ ...{ class: ("text-xs") }, });
            (detail.title);
        }
        __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({ ...{ class: ("text-2xl") }, });
        (detail.value);
        if (detail.description) {
            __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({ ...{ class: ("text-xs text-gray-400") }, });
            (detail.description);
        }
    }
    if (typeof __VLS_styleScopedClasses === 'object' && !Array.isArray(__VLS_styleScopedClasses)) {
        __VLS_styleScopedClasses['grid'];
        __VLS_styleScopedClasses['md:grid-cols-2'];
        __VLS_styleScopedClasses['gap-2'];
        __VLS_styleScopedClasses['bg-white'];
        __VLS_styleScopedClasses['shadow-md'];
        __VLS_styleScopedClasses['border'];
        __VLS_styleScopedClasses['rounded-md'];
        __VLS_styleScopedClasses['p-3'];
        __VLS_styleScopedClasses['h-[180px]'];
        __VLS_styleScopedClasses['flex'];
        __VLS_styleScopedClasses['flex-col'];
        __VLS_styleScopedClasses['justify-between'];
        __VLS_styleScopedClasses['mt-1'];
        __VLS_styleScopedClasses['flex'];
        __VLS_styleScopedClasses['gap-2'];
        __VLS_styleScopedClasses['items-center'];
        __VLS_styleScopedClasses['text-xs'];
        __VLS_styleScopedClasses['text-xs'];
        __VLS_styleScopedClasses['text-2xl'];
        __VLS_styleScopedClasses['text-xs'];
        __VLS_styleScopedClasses['text-gray-400'];
    }
    var __VLS_slots;
    return __VLS_slots;
    const __VLS_componentsOption = {};
    const __VLS_name = 'ForecastDetails';
    let __VLS_internalComponent;
}
