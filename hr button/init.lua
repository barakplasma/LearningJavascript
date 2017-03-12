-- a simple HTTP server

-- connect to WiFi access point
wifi.setmode(wifi.STATION)
wifi.sta.config("WIX Guest 2.4G", "Welcome2Wix!")
wifi.sta.autoconnect(1)

srv = net.createServer(net.TCP)
srv:listen(80, function(conn)
    conn:on("receive", function(sck, payload)
        print(payload)
        sck:send("HTTP/1.0 200 OK\r\nContent-Type: text/html\r\n\r\n<h1> Hello from NodeMCU.</h1><p>Welcome to the server Michael</p>")
    end)
    conn:on("sent", function(sck) sck:close() end)
end)

