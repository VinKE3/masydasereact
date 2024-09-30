import Seo from "@/components/common/Seo";
import HeaderMasy from "@/components/header/HeaderMasy";
import React from "react";
import HeroBanner from "@/sections/HeroBanner";
import Nosotros from "@/sections/Nosotros";
import Utilcon from "@/sections/Utilcon";
import LiquidacionCompra from "@/sections/LiquidacionCompra";
import GuiasTransportistas from "@/sections/GuiasTransportistas";
import GuiasRemision from "@/sections/GuiasRemision";
import SistemaEstandar from "@/sections/SistemaEstandar";
import Vps from "@/sections/Vps";
import OutsorcingContable from "@/sections/OutsorcingContable";
import PartnersSection from "@/sections/Partners";
import DesarrolloWeb from "@/sections/DesarrolloWeb";
import SistemaMedida from "@/sections/SistemaMedida";
import Contacto from "@/sections/Contacto";
const MasyDase = () => {
  return (
    <>
      <Seo pageTitle="MasyDase" />
      <HeaderMasy />
      <HeroBanner />
      <Nosotros />
      <Utilcon />
      <LiquidacionCompra />
      <GuiasTransportistas />
      <GuiasRemision />
      <SistemaEstandar />
      <SistemaMedida />
      <Vps />
      <OutsorcingContable />
      <PartnersSection />
      <DesarrolloWeb />
      <Contacto />
    </>
  );
};

export default MasyDase;
