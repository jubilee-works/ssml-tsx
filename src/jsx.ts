import { Element as SSMLElement } from "./Element";

declare global {
  namespace JSX {
    type Element<P = any> = SSMLElement<P>;

    type SSMLElementWithChildren<P> = P & {
      children?: JSX.Element | string | number | boolean;
    };

    type IntrinsicElements = {
      // https://developer.amazon.com/ja-JP/docs/alexa/custom-skills/speech-synthesis-markup-language-ssml-reference.html

      "amazon:domain": SSMLElementWithChildren<{
        name: "music" | "news";
      }>;

      "amazon:effect": SSMLElementWithChildren<{
        name: "whispered";
      }>;

      "amazon:emotion": SSMLElementWithChildren<{
        name: "excited" | "disappointed";
        intensity: "low" | "medium" | "high";
      }>;

      audio: SSMLElementWithChildren<{
        src: string;
      }>;

      break: SSMLElementWithChildren<{
        strength?:
          | "none"
          | "x-weak"
          | "weak"
          | "medium"
          | "strong"
          | "x-strong";
        time?: string;
      }>;

      emphasis: SSMLElementWithChildren<{
        level?: "strong" | "moderate" | "reduced";
      }>;

      lang: SSMLElementWithChildren<{
        "xml:lang": string;
      }>;

      p: SSMLElementWithChildren<{}>;

      phoneme: SSMLElementWithChildren<{
        alphabet: "ipa" | "x-sampa";
        ph: string;
      }>;

      prosody: SSMLElementWithChildren<{
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

      s: SSMLElementWithChildren<{}>;

      "say-as": SSMLElementWithChildren<{
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

      speak: SSMLElementWithChildren<{}>;

      sub: SSMLElementWithChildren<{
        alias: string;
      }>;

      voice: SSMLElementWithChildren<{
        name: string;
      }>;

      w: SSMLElementWithChildren<{
        role: "amazon:VB" | "amazon:VBD" | "amazon:NN" | "amazon:SENSE_1";
      }>;
    };
  }
}
