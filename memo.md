問題：
透明背景の動画がサイト全体の背景をしろにした状態で埋め込むと境界線が露出してしまう問題を解決したい ← スマホの時に起こる現象
現状黒だと境界線は、目立たないスマホでも　 ←2024/10/29

解決：
１、react-router-dom が vercel 上で動作しない問題を vercel.json で解決
２、video タグの muted が react 使用していて chrome 使用すると消えて autoplay がスマホ上で動作しない問題　
参考：https://github.com/facebook/react/issues/6544#issuecomment-705702546
