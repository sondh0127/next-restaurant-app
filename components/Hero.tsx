import React, { useState } from "react";
import { styled } from '@twind/react'
import { tw } from 'twind'
import Header from "./Header";

import ReactModalAdapter from "@/components/ReactModalAdapter";
import ResponsiveVideoEmbed from "@/components/ResponsiveVideoEmbed";
import { PlayCircle as PlayIcon, X as CloseIcon } from 'react-feather'

import svgDecoratorBlob1 from '@/assets/images/svg-decorator-blob-1.svg'
import svgDecoratorBlob2 from '@/assets/images/dot-pattern.svg'
import designIllustration from "@/assets/images/design-illustration.svg";

const Container = styled("div", { base: `relative` });
const TwoColumn = styled("div", { base: `flex flex-col lg:flex-row md:items-center max-w-screen-xl mx-auto py-20 md:py-24` });
const LeftColumn = styled("div", { base: `relative lg:w-6/12 lg:pr-12 flex-shrink-0 text-center lg:text-left` });
const RightColumn = styled("div", { base: `relative mt-12 lg:mt-0 flex flex-col justify-center` });

const Heading = styled("h1", { base: `font-black text-3xl leading-snug md:(text-5xl leading-snug) max-w-3xl` });
const Paragraph = styled("p", { base: `my-5 lg:my-8 text-sm lg:text-base font-medium text-gray-600 max-w-lg mx-auto lg:mx-0` });

const Actions = styled("div", { base: `flex flex-col items-center sm:flex-row justify-center lg:justify-start mt-8` });
const PrimaryButton = styled("button", { base: `font-bold px-8 lg:px-10 py-3 rounded bg-primary-500 text-gray-100 hocus:bg-primary-700 focus:shadow-outline focus:outline-none transition duration-300` });
const WatchVideoButton = styled("button", { base: `mt-4 sm:mt-0 sm:ml-8 flex items-center text-secondary-300 transition duration-300 hocus:text-primary-400 focus:outline-none` })

const IllustrationContainer = styled("div", { base: `flex justify-center md:justify-end items-center relative max-w-3xl lg:max-w-none` });

const CloseModalButton = styled("button", { base: `absolute top-0 right-0 mt-8 mr-8 hocus:text-primary-500` });

interface HeroProps {
  heading?: React.ReactNode,
  description?: string,
  primaryButtonText?: string,
  primaryButtonUrl?: string,
  watchVideoButtonText?: string,
  watchVideoYoutubeUrl?: string,
  imageSrc?: string,
  imageClass?: string
  imageDecoratorBlob?: boolean,
}

const Hero: React.FC<HeroProps> = ({
  heading = "Modern React Templates, Just For You",
  description = "Our templates are easy to setup, understand and customize. Fully modular components with a variety of pages and components.",
  primaryButtonText = "Get Started",
  primaryButtonUrl = "#",
  watchVideoButtonText = "Watch Video",
  watchVideoYoutubeUrl = "https://www.youtube.com/embed/_GuOjXYl5ew",
  imageSrc = designIllustration,
  imageClass = "",
  imageDecoratorBlob = false,
}) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const toggleModal = () => setModalIsOpen(!modalIsOpen);

  return (
    <>
      <Header />
      <Container>
        <TwoColumn>
          <LeftColumn>
            <Heading>{heading}</Heading>
            <Paragraph>{description}</Paragraph>
            <Actions>
              <PrimaryButton as="a" href={primaryButtonUrl}>{primaryButtonText}</PrimaryButton>
              <WatchVideoButton onClick={toggleModal}>
                <span className="">
                  <PlayIcon className={tw`stroke-1 w-12 h-12`} />
                </span>
                <span className={tw`ml-2 font-medium`}>{watchVideoButtonText}</span>
              </WatchVideoButton>
            </Actions>
          </LeftColumn>
          <RightColumn>
            <IllustrationContainer>
              <img
                className={imageClass}
                src={imageSrc}
                alt="Hero"
              />
              {imageDecoratorBlob && <img className={tw`pointer-events-none fill-current text-primary-500 opacity-25 absolute w-32 h-32 right-0 bottom-0 transform translate-x-10 translate-y-10 -z-10`} src={svgDecoratorBlob2} alt="DecoratorBlob1" />
              }
            </IllustrationContainer>
          </RightColumn>
        </TwoColumn>
        {/* <DecoratorBlob1 /> */}
        <img className={tw`pointer-events-none opacity-5 absolute left-0 bottom-0 h-64 w-64 transform -translate-x-2/3 -z-10`} src={svgDecoratorBlob1} alt="DecoratorBlob1" />

        <ReactModalAdapter
          closeTimeoutMS={300}
          overlayClassName={tw`fixed inset-0 z-50`}
          className={tw`xl:mx-auto m-4 sm:m-16 max-w-screen-xl absolute inset-0 flex justify-center items-center rounded-lg bg-gray-200 outline-none`}
          isOpen={modalIsOpen}
          onRequestClose={toggleModal}
          shouldCloseOnOverlayClick={true}
        >
          <CloseModalButton onClick={toggleModal}>
            <CloseIcon className={tw`w-6 h-6`} />
          </CloseModalButton>
          <div className={tw`w-full lg:p-16`}>
            <ResponsiveVideoEmbed url={watchVideoYoutubeUrl} className={tw`w-full`} />
          </div>
        </ReactModalAdapter>
      </Container>
    </>
  );
};
export default Hero