import { mock } from 'jest-mock-extended';
import {describe, expect, test, it} from '@jest/globals';
import React from 'react';
import {render, screen} from '@testing-library/react-native'
import NewsPreviewComponent from '../../src/components/NewsPreviewComponent';

declare global {
   interface String {
      shorten(noLetters: number): string;
   }
}

String.prototype.shorten = function (this : string, noLetters: number): string {
   if (!noLetters) return this;
   let string = this;
   if (string.trim().length <= noLetters) {
    return this;
   }
   var trimmedString = string.substring(0, noLetters) + "...";

   return trimmedString;
};

const data:any = {
    author: "Stephen Johnson",
    content: "Tech startup Telly is making a a huge bet: The companys business model involves giving away a dual-screen, 55, 4K TV, plus a sound-bar and a teleconferencing camera, music software, games, and more, … [+3452 chars]",
    description: "Tech startup Telly is making a a huge bet: The company’s business model involves giving away a dual-screen, 55”, 4K TV, plus a sound-bar and a teleconferencing camera, music software, games, and more, to the first half a million people who ask for one. Free t…",
    publishedAt: "2023-05-16T15:00:00Z",
    source: {
      id: null,
      name: "Lifehacker.com",
    },
    title: "How Much Crucial Personal Data Would You Give Up for a Free 4K TV?",
    url: "https://lifehacker.com/how-much-personal-data-would-you-give-up-for-a-free-4k-1850439401",
    urlToImage: "https://i.kinja-img.com/gawker-media/image/upload/c_fill,f_auto,fl_progressive,g_center,h_675,pg_1,q_80,w_1200/6daf8764adbe746fdd97182cf3a741ad.png",  
  }
  
describe('NewsPreviewComponent', () => {
  it('should display component with shorten title', async () => {
    const tree = render(<NewsPreviewComponent data={data} />);
    screen.getByText("How Much Crucial Personal Data Would You Give Up for a Free ...");
  });

  it('should display component with not shortened title', async () => {
    data.title = "short title"
    const tree = render(<NewsPreviewComponent data={data} />);
    screen.getByText("short title");
  });
  it('should display component with shorten description', async () => {
    data.title = "short title"
    const tree = render(<NewsPreviewComponent data={data} />);
    screen.getByText("Tech startup Telly is making a a huge bet: The company’s business model involves giving away a dual-...");
  });
});