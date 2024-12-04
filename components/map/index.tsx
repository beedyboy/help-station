const MapEmbed = () => {
  return (
    <div style={{ width: "100vw", margin: 0, padding: 0 }}>
      <iframe
        style={{
          width: "100%",
          height: "400px",
          border: "none",
        }}
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31657.161398123493!2d3.475230684621925!3d6.4357248918841195!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103bf4684fba57e7%3A0xb9d8eb4c8da105e5!2s7b%20Dr%20S%20Ezekuse%20Street%2C%20Lekki%20Phase%20One!5e0!3m2!1sen!2sng!4v1698245178547!5m2!1sen!2sng"
        allowFullScreen
        loading="lazy"
      />
    </div>
  );
};

export default MapEmbed;
