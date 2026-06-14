import {
  FaceSmileIcon,
  ChartBarSquareIcon,
  CursorArrowRaysIcon,
  DevicePhoneMobileIcon,
  AdjustmentsHorizontalIcon,
  SunIcon,
} from "@heroicons/react/24/solid";

import benefitOneImg from "../../public/img/hero2.jpg";
import benefitTwoImg from "../../public/img/hero3.jpg";

export interface BenefitBullet {
  title: string;
  desc: string;
  icon: React.ReactNode;
}

export interface BenefitData {
  title: string;
  desc: string;
  image: typeof benefitOneImg;
  bullets: BenefitBullet[];
}

export const benefitOne: BenefitData = {
  title: "Key Features",
  desc: "",
  image: benefitOneImg,
  bullets: [
    {
      title: "Advanced AI Technology",
      desc: "Leveraging the latest in AI technology to provide the best photo editing tools.",
      icon: <FaceSmileIcon />,
    },
    {
      title: "Comprehensive Features",
      desc: "A wide range of features to cover all your photo editing needs.",
      icon: <ChartBarSquareIcon />,
    },
    {
      title: "Ease of Use",
      desc: "Simple, user-friendly interface that makes advanced editing accessible to everyone.",
      icon: <CursorArrowRaysIcon />,
    },
  ],
};

export const benefitTwo: BenefitData = {
  title: "Offer more benefits here",
  desc: "",
  image: benefitTwoImg,
  bullets: [
    {
      title: "Mobile Responsive Template",
      desc: "SnapSavvy is designed as a mobile first responsive template.",
      icon: <DevicePhoneMobileIcon />,
    },
    {
      title: "Powered by Next.js & TailwindCSS",
      desc: "This template is powered by latest technologies and tools.",
      icon: <AdjustmentsHorizontalIcon />,
    },
    {
      title: "Dark & Light Mode",
      desc: "SnapSavvy comes with a zero-config light & dark mode.",
      icon: <SunIcon />,
    },
  ],
};
