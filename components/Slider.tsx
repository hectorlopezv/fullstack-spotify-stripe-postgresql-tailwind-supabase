type Props = {
  value?: number;
  onChange?: (value: number) => void;
};
import * as RadixSlider from "@radix-ui/react-slider";
export default function Slider({ onChange, value = 1 }: Props) {
  const handleChange = (newValue: number[]) => {
    onChange?.(newValue[0]);
  };
  return (
    <RadixSlider.Root
      className="relative flex items-center select-none touch-none w-full h-10"
      defaultValue={[1]}
      value={[value]}
      onValueChange={handleChange}
      max={1}
      step={0.1}
      aria-label="Volume slider"
    >
      <RadixSlider.Track className="bg-neutral-600 relative grow rounded-full h-[3px]">
        <RadixSlider.Range
          className="   absolute 
            bg-white 
            rounded-full 
            h-full"
        />
      </RadixSlider.Track>
    </RadixSlider.Root>
  );
}
