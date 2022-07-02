/* eslint-disable @typescript-eslint/no-namespace */
import { Children, Element as _Element } from "./Element";

declare global {
  namespace JSX {
    interface Element<P = any> extends _Element<P> {}

    type ElementWithChildren<P> = P & {
      children?: Children[];
    };

    interface IntrinsicElements {
      // References:
      // https://developer.amazon.com/ja-JP/docs/alexa/custom-skills/speech-synthesis-markup-language-ssml-reference.html
      // https://developers.google.com/assistant/df-asdk/ssml

      "amazon-domain": ElementWithChildren<{
        name: "conversational" | "long-form" | "music" | "news" | "fun";
      }>;

      "amazon-effect": ElementWithChildren<{
        name: "whispered";
      }>;

      "amazon-emotion": ElementWithChildren<{
        name: "excited" | "disappointed";
        intensity: "low" | "medium" | "high";
      }>;

      audio: ElementWithChildren<{
        src: string;
        clipBegin?: string;
        clipEnd?: string;
        speed?: string;
        repeatCount?: string;
        repeatDur?: string;
        soundLevel?: string;
      }>;

      desc: ElementWithChildren<{}>;

      break: ElementWithChildren<{
        strength?:
          | "none"
          | "x-weak"
          | "weak"
          | "medium"
          | "strong"
          | "x-strong";
        time?: string;
      }>;

      emphasis: ElementWithChildren<{
        level?: "strong" | "moderate" | "none" | "reduced";
      }>;

      lang: ElementWithChildren<{
        "xml:lang": string;
      }>;

      p: ElementWithChildren<{}>;

      phoneme: ElementWithChildren<{
        alphabet: "ipa" | "x-sampa";
        ph: string;
      }>;

      prosody: ElementWithChildren<{
        name?: string;
        rate?: "x-slow" | "slow" | "medium" | "fast" | "x-fast" | (string & {});
        pitch?: "x-low" | "low" | "medium" | "high" | "x-high" | (string & {});
        volume?:
          | "silent"
          | "x-soft"
          | "soft"
          | "medium"
          | "loud"
          | "x-loud"
          | (string & {});
      }>;

      s: ElementWithChildren<{}>;

      "say-as": ElementWithChildren<{
        "interpret-as":
          | "characters"
          | "spell-out"
          | "cardinal"
          | "number"
          | "ordinal"
          | "digits"
          | "fraction"
          | "unit"
          | "date"
          | "time"
          | "telephone"
          | "address"
          | "interjection"
          | "expletive"
          | "bleep"
          | "currency"
          | "verbatim";
        format?:
          | "mdy"
          | "dmy"
          | "ymd"
          | "md"
          | "dm"
          | "ym"
          | "my"
          | "d"
          | "m"
          | "y";
        detail?: "1" | "2";
      }>;

      speak: ElementWithChildren<{}>;

      sub: ElementWithChildren<{
        alias: string;
      }>;

      voice: ElementWithChildren<{
        name: string;
      }>;

      w: ElementWithChildren<{
        role: "amazon:VB" | "amazon:VBD" | "amazon:NN" | "amazon:SENSE_1";
      }>;

      mark: ElementWithChildren<{
        name: string;
      }>;

      par: ElementWithChildren<{}>;

      seq: ElementWithChildren<{}>;

      media: ElementWithChildren<{
        "xml:id"?: string;
        begin: string;
        end: string;
        repeatCount: string;
        repeatDur: string;
        soundLevel: string;
        fadeInDur: string;
        fadeOutDur: string;
      }>;
    }
  }
}
/* eslint-enable @typescript-eslint/no-namespace */
