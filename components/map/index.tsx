const MapEmbed = () => {
  return (
    <div style={{ width: "100vw", margin: 0, padding: 0 }}>
      <iframe
        style={{
          width: "100%",
          height: "400px",
          border: "none",
        }}
        src="https://maps.google.com/maps?q=Triangle%20Business%20place,%20Jakande,%20lekki%20Epe%20expressway%20Lagos&t=&z=13&ie=UTF8&iwloc=&output=embed"
        allowFullScreen
        loading="lazy"
      />
    </div>
  );
};

export default MapEmbed;
