import { React, useEffect } from "react";
import Review from "./components/Review";

const Testimonial = () => {
  useEffect(() => {
    document.title = "FaoTech: Reviews";
  }, []);
  return (
    <div className="-mt-[5rem] pt-32 from-primary to-base-200 text-base-content bg-gradient-to-b">
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
              quoteProps={"Started at stage zero. Now I know how to code well."}
              linkProps={"https://www.instagram.com/ilham.akbar6"}
              pictureProps={
                "https://sun9-48.userapi.com/impg/K5iH_0zmtUee1gJ7VXDBMDwSoy27TNfhynRuhA/6gX4AL8-HDY.jpg?size=720x1280&quality=96&sign=b81e20923742a7536f1140bcce323db1&type=album"
              }
            ></Review>
            <Review
              nameProps={"Ryan Pratama"}
              linkedinProps={"https://www.linkedin.com/in/ryanpratama14/"}
              instagramProps={"https://www.instagram.com/ryanpratama14"}
              telegramProps={"https://t.me/ryanpratama14/"}
              occupationProps={"FaoTech Student"}
              quoteProps={
                "Best career decision I've ever made. Recommended! 🙌"
              }
              linkProps={"https://www.instagram.com/ryanpratama14"}
              pictureProps={
                "https://sun9-81.userapi.com/impg/zpEQaT8EDrgYfk-HwzfkWMBYa3S_XIFSGJKpVg/Im_5Ubn6QSc.jpg?size=1728x2160&quality=96&sign=6d0560491c579c4a6ae0a36d0b5ad4e7&type=albu"
              }
            ></Review>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Testimonial;
