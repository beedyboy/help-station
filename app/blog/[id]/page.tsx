"use client";
import ImageTemplate from "@/components/image";
import img from "@/public/images/help_station_about.svg";
const PostPage = () => {
  return (
    <div className="w-full flex flex-col gap-5">
      <div className="w-full rounded-md overflow-hidden relative h-[280px] bg-cyan-700">
        <ImageTemplate src={img} />
        <div className=" p-4 absolute h-[81px] text-white backdrop-blur-lg  w-full bottom-0 bg-[#FFFFFF4D] bg-gradient-to-r flex justify-between">
          <div>
            <p className="text-xs font-semibold leading-4">Phoneix Baker</p>
            <p className="text-sm font-normal">20 Jan 2032</p>
          </div>
          <p className="text-xs font-semibold leading-4">Report</p>
        </div>
      </div>

      <div>
        <h3 className="font-semibold leading-10 text-neutral-1 text-2xl">
          UX review presentations
        </h3>
        <p className="text-[#797B89] text-lg leading-8 font-normal">
          How do you create compelling presentations that wow your colleagues
          and impress your managers?
        </p>
      </div>
      <div className="text-[#797B89] text-lg  leading-7 font-normal py-5">
        Last week, I presented my UX research to my design mentor, which was
        also my first time to deliver a UX research presentation. Before that, I
        did have some presentation experience, even in front of more than 50
        people. But this time, it makes a little difference. The presentation
        itself is mainly about explaining the methods applied in empathizing
        with the users and identifying the problems, especially the logic and
        rationale between each other. As a designer who now aspires to transit
        into UX, I approached all of my work with the mindset of “user
        experience”. Same here, I care what my audience feels when listening to
        my presentation, whether they could immerse in the atmosphere I create
        and receive the messages I convey. During my search in preparing the
        presentation, a term came into my view, which is “storytelling”.
        “Crafting a good experience is like telling a good story” — Dan Nessler
        To better understand how to use the concept of storytelling, I read
        several posts in the past week, and here are the most useful suggestions
        I summarize, which is highly workable that apply to practice. Let’s dive
        into the points: Opening — make an emotional connection with the
        audience The opening in the presentation is important, it decides
        whether you can grab your audience’s attention at the very beginning and
        build up a great impression. The emotional connection can be a story, a
        compelling question, or a shocking statistic. For instance, my UX
        research presentation is about children’s articulation development.
        Therefore, in my beginning, I shared a video showing how a kid tries to
        learn the sound of “R” and speak “Crayon”. The learning process is
        frustrated, then I pointed out the experience this kid has is not alone.
        Later on, I introduce the figure: according to the NIH, there are 5% of
        children now in the U.S. have the articulation problem. Considering the
        population of kids is 74 million in 2020, it means 3 million kids have
        articulation problems. By watching the video and realizing the
        surprising number of the population with this problem, my audience
        follows with me.
      </div>
    </div>
  );
};

export default PostPage;
