declare var CryptoJS: CryptoJS.CryptoJSStatic;

declare module CryptoJS{
    module lib{
        interface Base{
            extend(overrides: Object): Object
            init(...args: any[]): void
            //arguments of create() is same as init(). This is true for all subclasses
            create(...args: any[]): Base
            mixIn(properties: Object)
            clone(): Base
        }
        interface WordArray extends Base{
            words: number[]
            sigBytes: number
            init(words?: number[], sigBytes?: number): void
            create(words?: number[], sigBytes?: number): WordArray
            toString(encoder?: enc.IEncoder): String
            concat(wordArray: WordArray): WordArray
            clamp(): void
            clone(): WordArray
            random(nBytes: number): WordArray
        }
        interface LibStatic{
            WordArray: lib.WordArray
        }
    }
    module enc{
        interface IEncoder{
            stringify(wordArray: lib.WordArray): String
        }
        interface IDecoder{
            parse(s: String): lib.WordArray
        }
        interface ICoder extends IEncoder, IDecoder {}

        interface EncStatic{
            Hex: ICoder
            Latin1: ICoder
            Utf8: ICoder
            Base64: ICoder
            Utf16: ICoder
            Utf16BE: ICoder
            Utf16LE: ICoder
        }
    }
    module kdf{
        interface KdfStatic{

        }
    }
    module format{
        interface FormatStatic{

        }
    }
    module algo{
        interface AlgoStatic{

        }
    }
    module mode{
        interface ModeStatic{

        }
    }
    module pad{
        interface PadStatic{

        }
    }
    interface CryptoJSStatic{
        lib: lib.LibStatic
        enc: enc.EncStatic
        kdf: kdf.KdfStatic
        format: format.FormatStatic
        algo: algo.AlgoStatic
        mode: mode.ModeStatic
        pad: pad.PadStatic
    }
}
