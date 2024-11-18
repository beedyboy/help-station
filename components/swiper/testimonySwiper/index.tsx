import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { EffectCoverflow, Autoplay } from "swiper/modules";
import styles from "./swiper.module.css";

const testimonials = [
  {
    title: "HelpStations Exceeds Expectations",
    content:
      "HelpStations' processes are seamless! Our medical emergency needs are always met in a timely manner. They are a health service provider I'll keep using and referring everyone!",
    author: "Ayomikun",
    role: "Lulu's Management - Creative Director",
  },
  {
    title: "HelpStations’ Professional Paramedics",
    content:
      "HelpStations’ paramedics are extremely professional. They were very composed and swift in attending to the emergency situation at my event.",
    author: "Mrs F.",
    role: "Lulu's Management - Creative Director",
  },
  {
    title: "Walure Capital Partners with HelpStation",
    content:
      "Walure Capital partnered with HelpStation for the WalureFit event. Their team provided essential care, unsurpassed peace of mind, and a successful event. We look forward to future collaborations.",
    author: "GM, Walure Capital",
    role: "Lulu's Management - Creative Director",
  },
];

export default function CustomSwiper() {
  return (
    <div className={styles.container}>
      <Swiper
        effect="coverflow"
        grabCursor={true}
        // centeredSlides={true}
        slidesPerView={3} // 1 active slide and 2 smaller inactive slides
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: false,
        }}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        loop={true}
        modules={[EffectCoverflow, Autoplay]}
        className={`${styles.swiper} ${styles}`}
      >
        {testimonials.map((testimonial, index) => (
          <SwiperSlide key={index} className={styles.slide}>
            <div className={`${styles.card} md:w-[359px] md:h-[290px]`}>
              <h3 className={styles.title}>{testimonial.title}</h3>
              <p className={styles.content}>{testimonial.content}</p>
              <div className={styles.author}>
                <strong>{testimonial.author}</strong>
                <span>{testimonial.role}</span>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
