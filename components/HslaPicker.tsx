import { useBackground } from '@/recoil/background';
import React from 'react';
import { convertToHslaString } from "@/lib/utils";
import { Input } from './ui/input';

interface SliderProps {
  label: string;
  id: string;
  value: number;
  min: number;
  max: number;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  unit?: string;
}

const Slider: React.FC<SliderProps> = ({ label, id, value, min, max, onChange, unit = '' }) => (
  <div className="flex gap-2 items-center">
    <p className='w-[10%]'>{label}</p>
    <Input
      title={label}
      id={id}
      type="range"
      min={min}
      max={max}
      value={value}
      onChange={onChange}
      className='w-[70%]'
    />
    <p className='w-[10%]'>{value}{unit}</p>
  </div>
);

const HslaPicker: React.FC = () => {
  const [background, setBackground] = useBackground();

  const handleChange = (property: keyof Background) => (e: React.ChangeEvent<HTMLInputElement>) => {
    setBackground((prev) => ({
      ...prev,
      [property]: parseInt(e.target.value || "0"),
    }));
  };

  return (
    <div className="flex flex-col gap-4 max-w-52 p-2">
      <div
        style={{ backgroundColor: convertToHslaString(background) }}
        className="size-48"
      />
      <div className="flex flex-col justify-center items-center gap-1s">
        <Slider
          label="h"
          id="hue"
          min={0}
          max={360}
          value={background.h}
          onChange={handleChange('h')}
        />
        <Slider
          label="s"
          id="saturation"
          min={0}
          max={100}
          value={background.s}
          onChange={handleChange('s')}
          unit="%"
        />
        <Slider
          label="l"
          id="lightness"
          min={0}
          max={100}
          value={background.l}
          onChange={handleChange('l')}
          unit="%"
        />
        <Slider
          label="a"
          id="alpha"
          min={0}
          max={100}
          value={background.a}
          onChange={handleChange('a')}
          unit="%"
        />
      </div>
    </div>
  );
}

export default HslaPicker;
