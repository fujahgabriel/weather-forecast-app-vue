import { mount } from '@vue/test-utils';
import { describe, it, expect, vi } from 'vitest';
import NextFiveDays from '@/components/NextFiveDays.vue';
import Card from '@/components/Card.vue';

describe('NextFiveDays.vue', () => {
    it('renders correctly with forecast data', () => {
        const weatherForecastHistory = [
            {
                dt: 1633035600,
                dt_txt: '2021-10-01 12:00:00',
                weather: [{ icon: '10d' }],
                main: { temp: 293.15 }
            },
            {
                dt: 1633122000,
                dt_txt: '2021-10-02 12:00:00',
                weather: [{ icon: '01d' }],
                main: { temp: 295.15 }
            }
        ];

        const wrapper = mount(NextFiveDays, {
            props: {
                weatherForecastHistory
            },
            stubs: {
                Card
            },
            methods: {
                getShorthandDay: vi.fn(() => 'Fri'),
                convertDateToTime: vi.fn(() => '12:00 PM')
            }
        });

        console.log(wrapper.html());
        // Check if the component renders the correct structure
        const header = wrapper.find('p');
        expect(header.exists()).toBe(true);
        expect(header.text()).toBe('NEXT FIVE DAYS');
    });
});