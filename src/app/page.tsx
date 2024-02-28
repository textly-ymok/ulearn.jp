"use client";

import { scroller } from "react-scroll";
import { MdExpandMore } from "react-icons/md";

import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { MdMenu } from "react-icons/md";
import clsx from "clsx";
import { useEffect } from "react";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const menuItems = [
  { label: "ニュース", id: "news" },
  { label: "サービス", id: "service" },
  { label: "会社概要", id: "about" },
  { label: "メンバー", id: "member" },
  { label: "お問い合わせ", id: "contact" },
];

export default function Home() {
  const handleNav = (id) => {
    scroller.scrollTo(id, {
      duration: 500,
      smooth: true,
    });
  };

  const handleLogoClick = () => {
    scroller.scrollTo("mission", {
      duration: 300,
      smooth: true,
    });
  };

  const Section = ({ id, children, className }) => (
    <section
      id={id}
      className={clsx(
        "w-full flex flex-col h-svh min-h-[500px] justify-center items-center p-2 md:p-4 relative",
        className
      )}
    >
      {children}
    </section>
  );

  const Content = ({ id, children }) => (
    <div
      id={id + "-content"}
      className="flex flex-col justify-center items-center"
    >
      {children}
    </div>
  );

  const NavMenu = () => (
    <Sheet>
      <SheetTrigger>
        <MdMenu size="32px" />
      </SheetTrigger>
      <SheetContent>
        <div className="flex flex-col gap-4">
          {menuItems.map((item) => (
            <SheetClose asChild key={item.id + "-c"}>
              <Button
                variant="link"
                type="submit"
                className="text-xl font-bold"
                onClick={() => handleNav(item.id)}
              >
                {item.label}
              </Button>
            </SheetClose>
          ))}
        </div>
      </SheetContent>
    </Sheet>
  );

  const Br = () => <br className="md:hidden" />;

  const Item = ({
    itemName,
    classNameOfName,
    itemValue,
    classNameOfValue,
    id,
  }) => (
    <div className="flex flex-col" id={id}>
      <div
        className={clsx(
          "text-sm md:text-xl text-gray-400 font-bold",
          classNameOfName
        )}
      >
        {itemName}
      </div>
      <div className={clsx("text-xl md:text-2xl", classNameOfValue)}>
        {itemValue}
      </div>
    </div>
  );

  const Person = ({ name, ename, title }) => (
    <div className="w-full flex flex-col justify-center items-center">
      <span className="text-3xl font-extrabold">{name}</span>
      <span className="text-xl font-bold">{ename}</span>
      <span className="text-gray-500 mt-1">{title}</span>
    </div>
  );

  const gsap_from = { opacity: 0, y: 40 };
  const gsap_from_right = { opacity: 0, x: 40 };
  const gsap_to = { opacity: 1, y: 0, duration: 1 };
  const gsap_to_2 = { opacity: 1, x: 0, duration: 1 };
  const trigger = (id) => ({
    scrollTrigger: { trigger: id, start: "bottom center", end: "bottom top" },
  });
  const More = ({ id, className }) => (
    <MdExpandMore
      className={clsx("text-5xl absolute bottom-2 cursor-pointer", className)}
      onClick={() => {
        handleNav(id);
      }}
    />
  );

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.fromTo("#mission-content", gsap_from, {
      ...gsap_to,
    });

    gsap.fromTo("#news-content", gsap_from, {
      ...gsap_to,
      ...trigger("#mission"),
    });

    gsap.fromTo("#news-1", gsap_from_right, {
      ...gsap_to_2,
      ...trigger("#mission"),
      delay: 0.5,
    });
    gsap.fromTo("#news-2", gsap_from_right, {
      ...gsap_to_2,
      ...trigger("#mission"),
      delay: 1.0,
    });

    gsap.fromTo("#service-content", gsap_from, {
      ...gsap_to,
      ...trigger("#news"),
    });
    gsap.fromTo("#about-content", gsap_from, {
      ...gsap_to,
      ...trigger("#service"),
    });

    gsap.fromTo("#member-content", gsap_from, {
      ...gsap_to,
      ...trigger("#about"),
    });

    gsap.fromTo("#contact-content", gsap_from, {
      ...gsap_to,
      ...trigger("#member"),
    });
  }, []);

  return (
    <>
      <nav className="w-full flex justify-between fixed z-20 backdrop-blur-2xl p-2 md:p-4">
        <div
          className="text-2xl md:text-3xl font-extrabold my-auto cursor-pointer"
          onClick={handleLogoClick}
        >
          ulearn
        </div>
        <NavMenu />
      </nav>

      <Section id="mission" className="text-4xl md:text-5xl font-extrabold">
        <Content id="mission">
          学びを通じて、
          <Br />
          社会を豊かに
        </Content>
        <More id="news" />
      </Section>

      <Section id="news" className="text-4xl md:text-5xl font-extrabold">
        <Content id="news">
          <h1 className="text-4xl md:text-5xl font-extrabold">News</h1>
          <div className="flex flex-col gap-4 mt-12">
            <Item
              id="news-1"
              itemName="2024年1月15日"
              classNameOfName="text-sm md:text-sm"
              itemValue="経済産業省の「令和5年度　大企業等人材による新規事業創造促進事業」に、ulearn株式会社が採択されました。"
              classNameOfValue="text-md md:text-xl"
            />
            <Item
              id="news-2"
              itemName="2023年10月2日"
              classNameOfName="text-sm md:text-sm"
              itemValue="ulearn株式会社（本社：東京都渋谷区、代表取締役：山岡久俊）を設立いたしました。"
              classNameOfValue="text-md md:text-xl"
            />
          </div>
        </Content>
        <More id="service" />
      </Section>

      <Section id="service" className="bg-[url('/bg.jpg')] bg-[] p-0 md:p-0">
        <Content id="service">
          <h1 className="text-6xl md:text-8xl font-extrabold text-white">
            Publish
          </h1>

          <div className="flex flex-col justify-center items-center mt-8">
            <h1 className="text md:text-2xl text-white">
              クラウドファンディング型
            </h1>
            <h1 className="text md:text-2xl text-white">
              デジタル書籍出版プラットフォーム
            </h1>
          </div>
          <div className="flex flex-col justify-center items-center mt-6">
            <h1 className="text-xl md:text-2xl text-white">coming soon...</h1>
          </div>
        </Content>
        <More id="about" className="text-white" />
      </Section>

      <Section id="about" className="text-4xl">
        <Content id="about">
          <h1 className="text-4xl md:text-5xl font-extrabold">会社概要</h1>
          <div className="flex flex-col gap-4 mt-12">
            <Item itemName="会社名" itemValue="ulearn(ユーラーン)株式会社" />
            <Item itemName="設立日" itemValue="2023年10月2日" />
            <Item itemName="資本金" itemValue="500万円" />
            <Item
              itemName="事業内容"
              itemValue="教育コンテンツの仲介プラットフォーム事業"
            />
            <Item
              itemName="所在地"
              itemValue="東京都渋谷区道玄坂１丁目１０番８号渋谷道玄坂東急ビル２Ｆ－Ｃ"
            />
          </div>
        </Content>
        <More id="member" />
      </Section>

      <Section id="member" className="bg-gray-300">
        <Content id="member">
          <div className="grid grid-cols-1 md:grid-cols-3 w-full max-w-[800px] gap-8 md:gap-0">
            <Person
              name="山岡 久俊"
              ename="Hisatoshi Yamaoka"
              title="代表取締役"
            />
            <Person name="和田 透雄" ename="Yukio Wada" title="取締役" />
            <Person name="吉積 慧一郎" ename="Keiichiro Yoshizumi" title="　" />
          </div>
        </Content>
        <More id="contact" />
      </Section>

      <Section id="contact">
        <Content id="contact">
          <h1 className="text-4xl md:text-5xl font-extrabold">お問い合わせ</h1>
          <span className="text-xl md:text-2xl mt-8">
            お問い合わせは{" "}
            <a href="https://forms.gle/JyqXHAC4MoNk4hhM6">
              <u>こちら</u>
            </a>{" "}
            から
          </span>
        </Content>
      </Section>
    </>
  );
}
