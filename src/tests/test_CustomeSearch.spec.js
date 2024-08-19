import { mount } from '@vue/test-utils';
import CustomSearch from '@/components/CustomSearch.vue';

describe('CustomSearch.vue', () => {
  it('renders input with correct placeholder', () => {
    const placeholder = 'Search for items...';
    const wrapper = mount(CustomSearch, {
      props: { placeholder },
    });
    const input = wrapper.find('input');
    expect(input.attributes('placeholder')).toBe(placeholder);
  });

  it('updates modelValue when input changes', async () => {
    const wrapper = mount(CustomSearch, {
      props: { modelValue: '' },
    });
    const input = wrapper.find('input');
    await input.setValue('new value');
    expect(wrapper.emitted()['update:modelValue'][0]).toEqual(['new value']);
  });

  it('emits input event when typing', async () => {
    const wrapper = mount(CustomSearch, {
      props: { modelValue: '' },
    });
    const input = wrapper.find('input');
    await input.setValue('test input');
    expect(wrapper.emitted().input[0]).toEqual(['test input']);
  });
});