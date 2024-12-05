import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { EffectCoverflow, Autoplay } from "swiper/modules";
import styles from "./swiper.module.css";
import { testimonials } from "@/constants/homepageItems";

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
        // autoplay={{
        //   delay: 3000,
        //   disableOnInteraction: false,
        // }}
        loop={true}
        modules={[EffectCoverflow, Autoplay]}
        className={`${styles.swiper} ${styles} `}
      >
        {testimonials.map((testimonial, index) => (
          <SwiperSlide key={index} className={`${styles.slide} lg:w-[30%]`}>
            <div
              className={`${styles.card} md:w-[100%] md:h-[290px] flex justify-center flex-col items-center`}
            >
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
