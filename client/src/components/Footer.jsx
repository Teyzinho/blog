import React from "react";
import { footer } from "../constants";

const Footer = () => {
  return (
    <footer className="w-full text-white px-3 container_padding bg-gray-950 py-16 flex flex-wrap gap-x-28 gap-y-8 mt-36">
      <ul>
        <li className="font-medium pb-2">Contato</li>
        {footer.about.map((item) => (
          <li key={item.label}>
            {item.label}
          </li>
        ))}
      </ul>

      <ul>
        <li className="font-medium pb-2">Redes Sociais</li>
        {footer.socialMedia.map((item) => (
          <li key={item.platform}>
            {item.platform}
          </li>
        ))}
      </ul>

      <ul>
        <li className="font-medium pb-2">Sobre</li>
        {footer.quickLinks.map((item) => (
          <li  key={item.label}>
            {item.label}
          </li>
        ))}
      </ul>

    </footer>
  );
};

export default Footer;
