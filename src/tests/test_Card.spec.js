import { mount } from '@vue/test-utils';
import Card from '@/components/Card.vue';

describe('Card.vue', () => {
  it('renders correctly', () => {
    const wrapper = mount(Card, {
      slots: {
        default: '<p>Test content</p>',
      },
    });

    // Check if the component renders the correct structure
    expect(wrapper.classes()).toContain('bg-white');
    expect(wrapper.classes()).toContain('shadow-md');
    expect(wrapper.classes()).toContain('p-3');
    expect(wrapper.classes()).toContain('px-8');
    expect(wrapper.classes()).toContain('rounded-md');

    // Check if the slot content is rendered
    expect(wrapper.html()).toContain('<p>Test content</p>');
  });
});