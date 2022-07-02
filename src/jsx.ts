/* eslint-disable @typescript-eslint/no-namespace */
import { Children, Element as _Element } from "./Element";

declare global {
  namespace JSX {
    interface Element<P = any> extends _Element<P> {}

    type ElementWithChildren<P> = P & {
      children?: Children[];
    };

    interface IntrinsicElements {
      // https://developer.amazon.com/ja-JP/docs/alexa/custom-skills/speech-synthesis-markup-language-ssml-reference.html

      "amazon-domain": ElementWithChildren<{
        name: "music" | "news";
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
      }>;

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
        level?: "strong" | "moderate" | "reduced";
      }>;

      lang: ElementWithChildren<{
        "xml:lang": string;
      }>;

      p: ElementWithChildren<unknown>;

      phoneme: ElementWithChildren<{
        alphabet: "ipa" | "x-sampa";
        ph: string;
      }>;

      prosody: ElementWithChildren<{
        rate?: "x-slow" | "slow" | "medium" | "fast" | "x-fast" | string;
        pitch?: "x-low" | "low" | "medium" | "high" | "x-high" | string;
        volume?:
          | "silent"
          | "x-soft"
          | "soft"
          | "medium"
          | "loud"
          | "x-loud"
          | string;
      }>;

      s: ElementWithChildren<unknown>;

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
          | "expletive";

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
      }>;

      speak: ElementWithChildren<unknown>;

      sub: ElementWithChildren<{
        alias: string;
      }>;

      voice: ElementWithChildren<{
        name: string;
      }>;

      w: ElementWithChildren<{
        role: "amazon:VB" | "amazon:VBD" | "amazon:NN" | "amazon:SENSE_1";
      }>;
    }
  }
}
/* eslint-enable @typescript-eslint/no-namespace */
