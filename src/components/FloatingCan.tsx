"use client";
import { Float } from "@react-three/drei";
import { SodaCan, SodaCanProps } from "@/components/SodaCan";
import { forwardRef, PropsWithChildren } from "react";
import { Group } from "three";

type FloaringCanProps = {
  flavor?: SodaCanProps["flavor"];
  floatSpeed?: number;
  rotationIntensity?: number;
  floatIntensity?: number;
  floatingRange?: [number, number];
};

const FloatingCan = forwardRef<Group, PropsWithChildren<FloaringCanProps>>(
  (
    {
      flavor = "blackCherry",
      floatSpeed = 1.5,
      rotationIntensity = 1,
      floatIntensity = 1,
      floatingRange = [-0.1, -0.1],
      children,
      ...props
    },
    ref,
  ) => {
    return (
      <group ref={ref} {...props}>
        <Float
          speed={floatSpeed}
          rotationIntensity={rotationIntensity}
          floatIntensity={floatIntensity}
          floatingRange={floatingRange}
        >
          {children}
          <SodaCan flavor={flavor} />
        </Float>
      </group>
    );
  },
);

FloatingCan.displayName = "Floating Can";

export default FloatingCan;
