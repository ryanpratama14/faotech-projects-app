import { React, useEffect } from "react";
import Review from "./components/Review";

const Testimonial = () => {
  useEffect(() => {
    document.title = "FaoTech: Reviews";
  }, []);
  return (
    <div className="-mt-[5rem] pt-32 font-mono from-primary to-base-200 text-base-content bg-gradient-to-b">
      <section>
        <div class="mx-auto max-w-screen-xl px-8 py-12 sm:px-6 sm:pb-24 lg:px-8">
          <div class="mx-auto max-w-xl text-center">
            <h2 class="text-4xl font-bold tracking-tight sm:text-5xl">
              Read <span class="text-primary-content">trusted</span> reviews
              from our <span>students</span>
            </h2>
          </div>
          <div class="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 sm:gap-16 lg:grid-cols-3">
            <Review
              nameProps={"Alvin Pratama"}
              linkedinProps={
                "https://www.linkedin.com/in/alvin-pratama-1a046424b/"
              }
              instagramProps={"https://www.instagram.com/alvinjustkidding/"}
              telegramProps={"https://t.me/palveeen"}
              occupationProps={"FaoTech Student"}
              quoteProps={"First coffee then coding. Join FaoTech now."}
              linkProps={"https://www.instagram.com/alvinjustkidding"}
              pictureProps={
                "https://sun9-66.userapi.com/impg/dG1gdzQ7kkrPJ28sv9BOItZan82ysg4WrRz1GQ/Up3xSN3iPfE.jpg?size=1620x2160&quality=95&sign=767ae0c5eb95f6ef2bf4f6d98796a711&type=album"
              }
            ></Review>

            <Review
              nameProps={"Anas Firly"}
              linkedinProps={
                "https://www.linkedin.com/in/muhammad-anasfirly-3b3948147/"
              }
              instagramProps={"https://www.instagram.com/anasfirly_"}
              telegramProps={"https://t.me/anasfirly20"}
              occupationProps={"FaoTech Student"}
              quoteProps={"Great experience, learned so much from here."}
              linkProps={"https://www.instagram.com/anasfirly_"}
              pictureProps={
                "https://sun9-81.userapi.com/impf/c850136/v850136517/506d3/9mPlOfTeHus.jpg?size=640x1136&quality=96&sign=f69986d1718e3b68c1c1ec32da6c29e1&type=album"
              }
            ></Review>
            <Review
              nameProps={"Ilham Akbar"}
              linkedinProps={
                "https://www.linkedin.com/in/muhammad-ilham-akbar-380372166/"
              }
              instagramProps={"https://www.instagram.com/ilham.akbar6"}
              telegramProps={"https://t.me/ilham_akbar6"}
              occupationProps={"FaoTech Student"}
              quoteProps={
                "Started at stage zero. Alhamdulillah, now I know how to code well."
              }
              linkProps={"https://www.instagram.com/ilham.akbar6"}
              pictureProps={
                "https://sun9-48.userapi.com/impg/K5iH_0zmtUee1gJ7VXDBMDwSoy27TNfhynRuhA/6gX4AL8-HDY.jpg?size=720x1280&quality=96&sign=b81e20923742a7536f1140bcce323db1&type=album"
              }
            ></Review>
          </div>
        </div>
        <section class=" -mt-12 text-base-content pb-20" id="ceo">
          <div class="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
            <div class="flex justify-center mt-8 min-w-screen">
              <div>
                <img
                  src="https://sun9-81.userapi.com/impg/zpEQaT8EDrgYfk-HwzfkWMBYa3S_XIFSGJKpVg/Im_5Ubn6QSc.jpg?size=1728x2160&quality=96&sign=6d0560491c579c4a6ae0a36d0b5ad4e7&type=album"
                  class="mx-auto h-36 w-36 rounded-full object-cover shadow-xl"
                  alt="CEO"
                />

                <blockquote class="-mt-6 flex flex-col justify-between rounded-lg p-12 text-center shadow-xl">
                  <p class="font-bold text-2xl text-base-content">
                    Ryan Pratama
                  </p>
                  <p class="mt-0.5 text-s text-base-content font-bold ">
                    FaoTech Student
                  </p>
                  <div class="flex items-center justify-center mt-2">
                    <a
                      title="Follow me on Instagram"
                      href="https://www.instagram.com/ryanpratama14/"
                      target="_blank"
                      rel="noreferrer"
                      class="mx-1 block w-6 h-6 rounded-full transition-all shadow hover:shadow-lg transform hover:scale-110 hover:rotate-12"
                    >
                      <img
                        class=" object-cover object-center w-full h-full rounded-full"
                        alt="instagram"
                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Instagram_icon.png/2048px-Instagram_icon.png"
                      />
                    </a>
                    <a
                      title="Follow me on LinkedIn"
                      href="https://www.linkedin.com/in/ryanpratama14/"
                      target="_blank"
                      rel="noreferrer"
                      class="mx-1 block w-6 h-6 rounded-full transition-all shadow hover:shadow-lg transform hover:scale-110 hover:rotate-12"
                    >
                      <img
                        class=" object-cover object-center w-full h-full rounded-full"
                        alt="linkedin"
                        src="https://cdn-icons-png.flaticon.com/512/145/145807.png"
                      />
                    </a>
                    <a
                      title="Text me on Telegram"
                      href="https://t.me/ryanpratama14"
                      target="_blank"
                      rel="noreferrer"
                      class="mx-1 block w-6 h-6 rounded-full transition-all shadow hover:shadow-lg transform hover:scale-110 hover:rotate-12"
                    >
                      <img
                        class=" object-cover object-center w-full h-full rounded-full"
                        alt="telegram"
                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/82/Telegram_logo.svg/2048px-Telegram_logo.svg.png"
                      />
                    </a>
                  </div>
                  <p class="mt-4 text-lg text-base-content lg:w-96 md:w-96 sm:w-96">
                    "Choosing FaoTech was one of the best career decision I've
                    ever made. The program prepped me with necessary skills.
                    <br /> Highly recommended!" 🙌
                  </p>
                  <div class="mt-4 flex justify-center gap-0.5  text-secondary-focus">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="h-6 w-6"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="h-6 w-6"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="h-6 w-6"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="h-6 w-6"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="h-6 w-6"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  </div>

                  <a
                    class="btn mt-5 btn-secondary"
                    href="https://www.instagram.com/ryanpratama14/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Ask him anything
                  </a>
                </blockquote>
              </div>
            </div>
          </div>
        </section>
      </section>
    </div>
  );
};

export default Testimonial;