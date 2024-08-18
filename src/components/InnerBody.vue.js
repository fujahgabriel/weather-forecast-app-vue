import { mapActions, mapGetters } from 'vuex';
import CustomSearch from '../components/CustomSearch.vue';
import Card from '../components/Card.vue';
import NextFiveDays from '../components/NextFiveDays.vue';
import ForecastDetails from '../components/ForecastDetails.vue';
import MainForecast from '../components/MainForecast.vue';
export default (await import('vue')).defineComponent({
    data() {
        return {
            showExtraInfo: false,
            coordinates: null,
            loading: false,
            isAutoComplete: false
        };
    },
    components: {
        SearchInput: CustomSearch,
        Card,
        NextFiveDays,
        ForecastDetails,
        MainForecast
    },
    computed: {
        ...mapGetters('weather', [
            'GET_WEATHER_FORECAST',
            'GET_WEATHER_LOCATIONS',
            'WEATHER_FORECAST_HISTORY'
        ]),
        temperature() {
            const temp = this.GET_WEATHER_FORECAST?.main?.temp;
            return temp !== undefined ? Math.round(temp - 273.15) : 0;
        },
        description() {
            return this.GET_WEATHER_FORECAST?.weather[0]?.description;
        },
        icon() {
            return this.GET_WEATHER_FORECAST?.weather[0]?.icon;
        },
        humidity() {
            return this.GET_WEATHER_FORECAST?.main?.humidity ?? 0;
        },
        pressure() {
            return this.GET_WEATHER_FORECAST?.main?.pressure ?? 0;
        },
        min_temperature() {
            const tempMin = this.GET_WEATHER_FORECAST?.main?.temp_min;
            return tempMin !== undefined ? Math.round(tempMin - 273.15) : 0;
        },
        max_temperature() {
            const tempMax = this.GET_WEATHER_FORECAST?.main?.temp_max;
            return tempMax !== undefined ? Math.round(tempMax - 273.15) : 0;
        },
        locations() {
            return this.GET_WEATHER_LOCATIONS;
        },
        sunrise() {
            return this.GET_WEATHER_FORECAST?.sys?.sunrise ?? 0;
        },
        sunset() {
            return this.GET_WEATHER_FORECAST?.sys?.sunset ?? 0;
        },
        dailyForecast() {
            return this.WEATHER_FORECAST_HISTORY;
        },
    },
    methods: {
        ...mapActions('weather', [
            'FETCH_WEATHER_FORECAST',
            'GET_WEATHER_FORECAST_THROUGH_COORDINATES',
            'FETCH_WEATHER_LOCATIONS',
            'GET_NEXT_DAYS_FORECAST'
        ]),
        setAutoComplete() {
            this.isAutoComplete = true;
        },
        fetchWeather(location) {
            this.coordinates = {
                latitude: location.lat,
                longitude: location.lon
            };
            this.GET_NEXT_DAYS_FORECAST(this.coordinates);
            this.FETCH_WEATHER_FORECAST(location.name);
        },
        fetchWeatherLocation() {
            this.isAutoComplete = true;
            this.loading = true;
            this.FETCH_WEATHER_LOCATIONS(this.location);
            this.loading = false;
        },
        getWeatherForecastThroughCoordinate() {
            this.loading = true;
            this.GET_WEATHER_FORECAST_THROUGH_COORDINATES(this.coordinates);
            this.loading = false;
        },
        getNextSevenDaysForecast() {
            this.loading = true;
            this.GET_NEXT_DAYS_FORECAST(this.coordinates);
            this.loading = false;
        },
        toggleExtraInfo() {
            this.showExtraInfo = !this.showExtraInfo;
        },
        getFirstHourDailyForecast() {
            return this.dxrailyForecast.list;
        },
        async selectWeather(item) {
            this.location = `${item.name}, ${item.state}`;
            this.fetchWeather(item);
            this.isAutoComplete = false;
        },
    },
    created() {
        this.loading = true;
        const data = navigator.geolocation.getCurrentPosition(async (position) => {
            this.coordinates = {
                latitude: position.coords.latitude,
                longitude: position.coords.longitude
            };
            this.getWeatherForecastThroughCoordinate(position.coords.latitude, position.coords.longitude);
            this.getNextSevenDaysForecast(position.coords.latitude, position.coords.longitude);
            this.loading = false;
        });
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
    let __VLS_resolvedLocalAndGlobalComponents;
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("min-h-screen") }, });
    if (__VLS_ctx.loading) {
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("flex h-screen justify-center items-center") }, });
        __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({ ...{ class: ("text-center mt-8 italic text-white") }, });
        // @ts-ignore
        [loading,];
    }
    else {
        __VLS_elementAsFunction(__VLS_intrinsicElements.section, __VLS_intrinsicElements.section)({ ...{ class: ("md:px-8 px-2 md:mx-8 mx-2 pt-4") }, });
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("flex justify-center px-3") }, });
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("") }, });
        // @ts-ignore
        const __VLS_0 = {}
            .SearchInput;
        ({}.SearchInput);
        __VLS_components.SearchInput;
        // @ts-ignore
        [SearchInput,];
        // @ts-ignore
        const __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0({ ...{ 'onInput': {} }, modelValue: ((__VLS_ctx.location)), placeholder: ("Enter location e.g Lagos, London, Texas..."), }));
        const __VLS_2 = __VLS_1({ ...{ 'onInput': {} }, modelValue: ((__VLS_ctx.location)), placeholder: ("Enter location e.g Lagos, London, Texas..."), }, ...__VLS_functionalComponentArgsRest(__VLS_1));
        ({}({ ...{ 'onInput': {} }, modelValue: ((__VLS_ctx.location)), placeholder: ("Enter location e.g Lagos, London, Texas..."), }));
        let __VLS_6;
        const __VLS_7 = {
            onInput: (__VLS_ctx.fetchWeatherLocation)
        };
        const __VLS_5 = __VLS_nonNullable(__VLS_pickFunctionalComponentCtx(__VLS_0, __VLS_2));
        let __VLS_3;
        let __VLS_4;
        // @ts-ignore
        [location, fetchWeatherLocation,];
        if (__VLS_ctx.isAutoComplete) {
            __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("bg-white border w-[400px] mt-2 absolute rounded-md z-10 ") }, ...{ class: (((__VLS_ctx.location && __VLS_ctx.location?.length) < 1 && 'hidden')) }, });
            __VLS_styleScopedClasses = ((location && location?.length) < 1 && 'hidden');
            for (const [item] of __VLS_getVForSourceType((__VLS_ctx.locations))) {
                __VLS_elementAsFunction(__VLS_intrinsicElements.ul, __VLS_intrinsicElements.ul)({ ...{ class: ("mx-2 p-1") }, });
                __VLS_elementAsFunction(__VLS_intrinsicElements.li, __VLS_intrinsicElements.li)({ ...{ onClick: (...[$event]) => {
                            if (!(!((__VLS_ctx.loading))))
                                return;
                            if (!((__VLS_ctx.isAutoComplete)))
                                return;
                            __VLS_ctx.selectWeather(item);
                            // @ts-ignore
                            [location, location, isAutoComplete, locations, selectWeather,];
                        } }, ...{ class: ("hover:bg-slate-200 hover:cursor-pointer mb-1") }, });
                (item.name);
                (item.state);
            }
        }
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("flex flex-col justify-center items-center my-4") }, });
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("rounded-md p-4 md:w-[900px] w-full") }, });
        // @ts-ignore
        const __VLS_8 = {}
            .NextFiveDays;
        ({}.NextFiveDays);
        __VLS_components.NextFiveDays;
        // @ts-ignore
        [NextFiveDays,];
        // @ts-ignore
        const __VLS_9 = __VLS_asFunctionalComponent(__VLS_8, new __VLS_8({ weatherForecastHistory: ((__VLS_ctx.WEATHER_FORECAST_HISTORY)), }));
        const __VLS_10 = __VLS_9({ weatherForecastHistory: ((__VLS_ctx.WEATHER_FORECAST_HISTORY)), }, ...__VLS_functionalComponentArgsRest(__VLS_9));
        ({}({ weatherForecastHistory: ((__VLS_ctx.WEATHER_FORECAST_HISTORY)), }));
        const __VLS_13 = __VLS_nonNullable(__VLS_pickFunctionalComponentCtx(__VLS_8, __VLS_10));
        // @ts-ignore
        [WEATHER_FORECAST_HISTORY,];
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("grid md:grid-cols-2 grid-cols-1 gap-3 mt-12") }, });
        // @ts-ignore
        const __VLS_14 = {}
            .MainForecast;
        ({}.MainForecast);
        __VLS_components.MainForecast;
        // @ts-ignore
        [MainForecast,];
        // @ts-ignore
        const __VLS_15 = __VLS_asFunctionalComponent(__VLS_14, new __VLS_14({ icon: ((__VLS_ctx.icon)), temperature: ((__VLS_ctx.temperature)), description: ((__VLS_ctx.description)), locationName: ((__VLS_ctx.GET_WEATHER_FORECAST?.name)), dateTime: ((__VLS_ctx.GET_WEATHER_FORECAST?.dt)), windSpeed: ((__VLS_ctx.GET_WEATHER_FORECAST?.wind?.speed ?? 0)), }));
        const __VLS_16 = __VLS_15({ icon: ((__VLS_ctx.icon)), temperature: ((__VLS_ctx.temperature)), description: ((__VLS_ctx.description)), locationName: ((__VLS_ctx.GET_WEATHER_FORECAST?.name)), dateTime: ((__VLS_ctx.GET_WEATHER_FORECAST?.dt)), windSpeed: ((__VLS_ctx.GET_WEATHER_FORECAST?.wind?.speed ?? 0)), }, ...__VLS_functionalComponentArgsRest(__VLS_15));
        ({}({ icon: ((__VLS_ctx.icon)), temperature: ((__VLS_ctx.temperature)), description: ((__VLS_ctx.description)), locationName: ((__VLS_ctx.GET_WEATHER_FORECAST?.name)), dateTime: ((__VLS_ctx.GET_WEATHER_FORECAST?.dt)), windSpeed: ((__VLS_ctx.GET_WEATHER_FORECAST?.wind?.speed ?? 0)), }));
        const __VLS_19 = __VLS_nonNullable(__VLS_pickFunctionalComponentCtx(__VLS_14, __VLS_16));
        // @ts-ignore
        [icon, temperature, description, GET_WEATHER_FORECAST, GET_WEATHER_FORECAST, GET_WEATHER_FORECAST,];
        // @ts-ignore
        const __VLS_20 = {}
            .ForecastDetails;
        ({}.ForecastDetails);
        __VLS_components.ForecastDetails;
        // @ts-ignore
        [ForecastDetails,];
        // @ts-ignore
        const __VLS_21 = __VLS_asFunctionalComponent(__VLS_20, new __VLS_20({ sunrise: ((__VLS_ctx.sunrise)), sunset: ((__VLS_ctx.sunset)), temperature: ((__VLS_ctx.temperature)), humidity: ((__VLS_ctx.humidity)), pressure: ((__VLS_ctx.pressure)), minTemperature: ((__VLS_ctx.min_temperature)), maxTemperature: ((__VLS_ctx.max_temperature)), }));
        const __VLS_22 = __VLS_21({ sunrise: ((__VLS_ctx.sunrise)), sunset: ((__VLS_ctx.sunset)), temperature: ((__VLS_ctx.temperature)), humidity: ((__VLS_ctx.humidity)), pressure: ((__VLS_ctx.pressure)), minTemperature: ((__VLS_ctx.min_temperature)), maxTemperature: ((__VLS_ctx.max_temperature)), }, ...__VLS_functionalComponentArgsRest(__VLS_21));
        ({}({ sunrise: ((__VLS_ctx.sunrise)), sunset: ((__VLS_ctx.sunset)), temperature: ((__VLS_ctx.temperature)), humidity: ((__VLS_ctx.humidity)), pressure: ((__VLS_ctx.pressure)), minTemperature: ((__VLS_ctx.min_temperature)), maxTemperature: ((__VLS_ctx.max_temperature)), }));
        const __VLS_25 = __VLS_nonNullable(__VLS_pickFunctionalComponentCtx(__VLS_20, __VLS_22));
        // @ts-ignore
        [temperature, sunrise, sunset, humidity, pressure, min_temperature, max_temperature,];
    }
    if (typeof __VLS_styleScopedClasses === 'object' && !Array.isArray(__VLS_styleScopedClasses)) {
        __VLS_styleScopedClasses[''];
        __VLS_styleScopedClasses['min-h-screen'];
        __VLS_styleScopedClasses['flex'];
        __VLS_styleScopedClasses['h-screen'];
        __VLS_styleScopedClasses['justify-center'];
        __VLS_styleScopedClasses['items-center'];
        __VLS_styleScopedClasses['text-center'];
        __VLS_styleScopedClasses['mt-8'];
        __VLS_styleScopedClasses['italic'];
        __VLS_styleScopedClasses['text-white'];
        __VLS_styleScopedClasses['md:px-8'];
        __VLS_styleScopedClasses['px-2'];
        __VLS_styleScopedClasses['md:mx-8'];
        __VLS_styleScopedClasses['mx-2'];
        __VLS_styleScopedClasses['pt-4'];
        __VLS_styleScopedClasses['flex'];
        __VLS_styleScopedClasses['justify-center'];
        __VLS_styleScopedClasses['px-3'];
        __VLS_styleScopedClasses['bg-white'];
        __VLS_styleScopedClasses['border'];
        __VLS_styleScopedClasses['w-[400px]'];
        __VLS_styleScopedClasses['mt-2'];
        __VLS_styleScopedClasses['absolute'];
        __VLS_styleScopedClasses['rounded-md'];
        __VLS_styleScopedClasses['z-10'];
        __VLS_styleScopedClasses['mx-2'];
        __VLS_styleScopedClasses['p-1'];
        __VLS_styleScopedClasses['hover:bg-slate-200'];
        __VLS_styleScopedClasses['hover:cursor-pointer'];
        __VLS_styleScopedClasses['mb-1'];
        __VLS_styleScopedClasses['flex'];
        __VLS_styleScopedClasses['flex-col'];
        __VLS_styleScopedClasses['justify-center'];
        __VLS_styleScopedClasses['items-center'];
        __VLS_styleScopedClasses['my-4'];
        __VLS_styleScopedClasses['rounded-md'];
        __VLS_styleScopedClasses['p-4'];
        __VLS_styleScopedClasses['md:w-[900px]'];
        __VLS_styleScopedClasses['w-full'];
        __VLS_styleScopedClasses['grid'];
        __VLS_styleScopedClasses['md:grid-cols-2'];
        __VLS_styleScopedClasses['grid-cols-1'];
        __VLS_styleScopedClasses['gap-3'];
        __VLS_styleScopedClasses['mt-12'];
    }
    var __VLS_slots;
    return __VLS_slots;
    const __VLS_componentsOption = {
        SearchInput: CustomSearch,
        Card,
        NextFiveDays,
        ForecastDetails,
        MainForecast
    };
    const __VLS_name = undefined;
    let __VLS_internalComponent;
}
