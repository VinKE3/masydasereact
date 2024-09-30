import React from "react";

const Map2 = () => {
  return (
    <div className="map-area-two h-100 w-100">
      <div className="mapouter">
        <div className="gmap_canvas">
          <iframe
            className="gmap_iframe"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d819.7673980640701!2d-76.9372320726472!3d-12.214869872058369!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9105b95f58fe618f%3A0x92fd4357b6a2fc43!2sVilla%20El%20Salvador%20Sector%20III%20Grupo13%2C%20Villa%20EL%20Salvador%2015834!5e0!3m2!1ses-419!2spe!4v1727715673569!5m2!1ses-419!2spe"
            width="600"
            height="450"
            style={{ border: 0 }} // Puedes utilizar style={{ border: 0 }} en lugar de style="border:0;"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Map2;
