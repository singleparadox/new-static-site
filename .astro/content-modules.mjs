
export default new Map([
["src/content/posts/test.mdx", () => import("astro:content-layer-deferred-module?astro%3Acontent-layer-deferred-module=&fileName=src%2Fcontent%2Fposts%2Ftest.mdx&astroContentModuleFlag=true")],
["src/content/projects/none.mdx", () => import("astro:content-layer-deferred-module?astro%3Acontent-layer-deferred-module=&fileName=src%2Fcontent%2Fprojects%2Fnone.mdx&astroContentModuleFlag=true")],
["src/content/other/about.mdx", () => import("astro:content-layer-deferred-module?astro%3Acontent-layer-deferred-module=&fileName=src%2Fcontent%2Fother%2Fabout.mdx&astroContentModuleFlag=true")]]);
		