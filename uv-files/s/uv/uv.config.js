self.__uv$config = {
	prefix: "/s/ultraviolet/",
	bare: "https://full.boxathome.net/bare/",
	encodeUrl: Ultraviolet.codec.xor.encode,
	decodeUrl: Ultraviolet.codec.xor.decode,
	handler: "/s/uv/uv.handler.js",
	bundle: "/s/uv/uv.bundle.js",
	config: "/s/uv/uv.config.js",
	sw: "/s/uv/uv.sw.js",
};
