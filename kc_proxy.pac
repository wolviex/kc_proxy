function FindProxyForURL(url, host) {
    PROXY = "SOCKS5 127.0.0.1:8001";

    // kci.co via proxy
    if (shExpMatch(host,"kciq.kci.co")) {
	return "DIRECT";
    }

    if (shExpMatch(host,"*.kci.co")) {
        return PROXY;
    }

    // 12.17.* via proxy
    if (shExpMatch(host,"172.17.*")) {
	return PROXY;
    }

   // 10.99.* via the dutest proxy
   if (shExpMatch(host,"10.99.*")) {
	return "SOCKS5 127.0.0.1:8003";
   }

    // Everything else directly!
    return "DIRECT";
}
