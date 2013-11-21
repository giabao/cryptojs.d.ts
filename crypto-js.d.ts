declare var CryptoJS: CryptoJS.CryptoJSStatic;

declare module CryptoJS{
    module lib{
        interface LibStatic{

        }
    }
    module enc{
        interface EncStatic{

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
