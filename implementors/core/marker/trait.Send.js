(function() {var implementors = {};
implementors["tower_grpc"] = [{text:"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> for <a class=\"struct\" href=\"tower_grpc/struct.BoxBody.html\" title=\"struct tower_grpc::BoxBody\">BoxBody</a>",synthetic:true,types:["tower_grpc::body::BoxBody"]},{text:"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> for <a class=\"struct\" href=\"tower_grpc/struct.Status.html\" title=\"struct tower_grpc::Status\">Status</a>",synthetic:true,types:["tower_grpc::status::Status"]},{text:"impl&lt;T&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> for <a class=\"struct\" href=\"tower_grpc/struct.Request.html\" title=\"struct tower_grpc::Request\">Request</a>&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a>,&nbsp;</span>",synthetic:true,types:["tower_grpc::request::Request"]},{text:"impl&lt;T&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> for <a class=\"struct\" href=\"tower_grpc/struct.Response.html\" title=\"struct tower_grpc::Response\">Response</a>&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a>,&nbsp;</span>",synthetic:true,types:["tower_grpc::response::Response"]},{text:"impl&lt;T&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> for <a class=\"struct\" href=\"tower_grpc/struct.Encode.html\" title=\"struct tower_grpc::Encode\">Encode</a>&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;T as <a class=\"trait\" href=\"tower_grpc/codegen/client/futures/trait.Stream.html\" title=\"trait tower_grpc::codegen::client::futures::Stream\">Stream</a>&gt;::<a class=\"type\" href=\"tower_grpc/codegen/client/futures/trait.Stream.html#associatedtype.Item\" title=\"type tower_grpc::codegen::client::futures::Stream::Item\">Item</a>: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a>,&nbsp;</span>",synthetic:true,types:["tower_grpc::codec::Encode"]},{text:"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> for <a class=\"enum\" href=\"tower_grpc/enum.Code.html\" title=\"enum tower_grpc::Code\">Code</a>",synthetic:true,types:["tower_grpc::status::Code"]},{text:"impl&lt;T&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> for <a class=\"struct\" href=\"tower_grpc/client/struct.Grpc.html\" title=\"struct tower_grpc::client::Grpc\">Grpc</a>&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a>,&nbsp;</span>",synthetic:true,types:["tower_grpc::client::Grpc"]},{text:"impl&lt;T, U, B&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> for <a class=\"struct\" href=\"tower_grpc/client/unary/struct.ResponseFuture.html\" title=\"struct tower_grpc::client::unary::ResponseFuture\">ResponseFuture</a>&lt;T, U, B&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;B: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;T: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;U: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;B as <a class=\"trait\" href=\"tower_grpc/codegen/server/grpc/trait.Body.html\" title=\"trait tower_grpc::codegen::server::grpc::Body\">Body</a>&gt;::<a class=\"type\" href=\"tower_grpc/codegen/server/grpc/trait.Body.html#associatedtype.Item\" title=\"type tower_grpc::codegen::server::grpc::Body::Item\">Item</a>: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a>,&nbsp;</span>",synthetic:true,types:["tower_grpc::client::unary::ResponseFuture"]},{text:"impl&lt;T, U, B&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> for <a class=\"struct\" href=\"tower_grpc/client/client_streaming/struct.ResponseFuture.html\" title=\"struct tower_grpc::client::client_streaming::ResponseFuture\">ResponseFuture</a>&lt;T, U, B&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;B: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;T: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;U: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;B as <a class=\"trait\" href=\"tower_grpc/codegen/server/grpc/trait.Body.html\" title=\"trait tower_grpc::codegen::server::grpc::Body\">Body</a>&gt;::<a class=\"type\" href=\"tower_grpc/codegen/server/grpc/trait.Body.html#associatedtype.Item\" title=\"type tower_grpc::codegen::server::grpc::Body::Item\">Item</a>: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a>,&nbsp;</span>",synthetic:true,types:["tower_grpc::client::client_streaming::ResponseFuture"]},{text:"impl&lt;T, U&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> for <a class=\"struct\" href=\"tower_grpc/client/server_streaming/struct.ResponseFuture.html\" title=\"struct tower_grpc::client::server_streaming::ResponseFuture\">ResponseFuture</a>&lt;T, U&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;U: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a>,&nbsp;</span>",synthetic:true,types:["tower_grpc::client::server_streaming::ResponseFuture"]},{text:"impl&lt;T, U&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> for <a class=\"struct\" href=\"tower_grpc/client/streaming/struct.ResponseFuture.html\" title=\"struct tower_grpc::client::streaming::ResponseFuture\">ResponseFuture</a>&lt;T, U&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;U: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a>,&nbsp;</span>",synthetic:true,types:["tower_grpc::client::streaming::ResponseFuture"]},{text:"impl&lt;T, B&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> for <a class=\"struct\" href=\"tower_grpc/generic/struct.Streaming.html\" title=\"struct tower_grpc::generic::Streaming\">Streaming</a>&lt;T, B&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;B: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;T: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;B as <a class=\"trait\" href=\"tower_grpc/codegen/server/grpc/trait.Body.html\" title=\"trait tower_grpc::codegen::server::grpc::Body\">Body</a>&gt;::<a class=\"type\" href=\"tower_grpc/codegen/server/grpc/trait.Body.html#associatedtype.Item\" title=\"type tower_grpc::codegen::server::grpc::Body::Item\">Item</a>: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a>,&nbsp;</span>",synthetic:true,types:["tower_grpc::generic::codec::Streaming"]},{text:"impl&lt;T, U&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> for <a class=\"struct\" href=\"tower_grpc/generic/struct.Encode.html\" title=\"struct tower_grpc::generic::Encode\">Encode</a>&lt;T, U&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;U: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a>,&nbsp;</span>",synthetic:true,types:["tower_grpc::generic::codec::Encode"]},{text:"impl&lt;'a&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> for <a class=\"struct\" href=\"tower_grpc/generic/struct.EncodeBuf.html\" title=\"struct tower_grpc::generic::EncodeBuf\">EncodeBuf</a>&lt;'a&gt;",synthetic:true,types:["tower_grpc::generic::codec::EncodeBuf"]},{text:"impl&lt;'a&gt; !<a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> for <a class=\"struct\" href=\"tower_grpc/generic/struct.DecodeBuf.html\" title=\"struct tower_grpc::generic::DecodeBuf\">DecodeBuf</a>&lt;'a&gt;",synthetic:true,types:["tower_grpc::generic::codec::DecodeBuf"]},{text:"impl&lt;'a, T&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> for <a class=\"struct\" href=\"tower_grpc/generic/client/struct.AsService.html\" title=\"struct tower_grpc::generic::client::AsService\">AsService</a>&lt;'a, T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a>,&nbsp;</span>",synthetic:true,types:["tower_grpc::generic::client::AsService"]},{text:"impl&lt;T&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> for <a class=\"struct\" href=\"tower_grpc/generic/client/struct.IntoService.html\" title=\"struct tower_grpc::generic::client::IntoService\">IntoService</a>&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a>,&nbsp;</span>",synthetic:true,types:["tower_grpc::generic::client::IntoService"]},{text:"impl&lt;T&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> for <a class=\"struct\" href=\"tower_grpc/server/unary/struct.Once.html\" title=\"struct tower_grpc::server::unary::Once\">Once</a>&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a>,&nbsp;</span>",synthetic:true,types:["tower_grpc::generic::server::unary::Once"]},{text:"impl&lt;VE&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> for <a class=\"struct\" href=\"tower_grpc/metadata/struct.MetadataKey.html\" title=\"struct tower_grpc::metadata::MetadataKey\">MetadataKey</a>&lt;VE&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;VE: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a>,&nbsp;</span>",synthetic:true,types:["tower_grpc::metadata::key::MetadataKey"]},{text:"impl&lt;VE&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> for <a class=\"struct\" href=\"tower_grpc/metadata/struct.MetadataValue.html\" title=\"struct tower_grpc::metadata::MetadataValue\">MetadataValue</a>&lt;VE&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;VE: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a>,&nbsp;</span>",synthetic:true,types:["tower_grpc::metadata::value::MetadataValue"]},{text:"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> for <a class=\"struct\" href=\"tower_grpc/metadata/struct.MetadataMap.html\" title=\"struct tower_grpc::metadata::MetadataMap\">MetadataMap</a>",synthetic:true,types:["tower_grpc::metadata::map::MetadataMap"]},{text:"impl&lt;'a&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> for <a class=\"struct\" href=\"tower_grpc/metadata/struct.Keys.html\" title=\"struct tower_grpc::metadata::Keys\">Keys</a>&lt;'a&gt;",synthetic:true,types:["tower_grpc::metadata::map::Keys"]},{text:"impl&lt;'a&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> for <a class=\"struct\" href=\"tower_grpc/metadata/struct.Values.html\" title=\"struct tower_grpc::metadata::Values\">Values</a>&lt;'a&gt;",synthetic:true,types:["tower_grpc::metadata::map::Values"]},{text:"impl&lt;'a, VE&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> for <a class=\"struct\" href=\"tower_grpc/metadata/struct.ValueIter.html\" title=\"struct tower_grpc::metadata::ValueIter\">ValueIter</a>&lt;'a, VE&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;VE: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a>,&nbsp;</span>",synthetic:true,types:["tower_grpc::metadata::map::ValueIter"]},{text:"impl&lt;'a, VE&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> for <a class=\"struct\" href=\"tower_grpc/metadata/struct.GetAll.html\" title=\"struct tower_grpc::metadata::GetAll\">GetAll</a>&lt;'a, VE&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;VE: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a>,&nbsp;</span>",synthetic:true,types:["tower_grpc::metadata::map::GetAll"]},{text:"impl&lt;'a, VE&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> for <a class=\"struct\" href=\"tower_grpc/metadata/struct.VacantEntry.html\" title=\"struct tower_grpc::metadata::VacantEntry\">VacantEntry</a>&lt;'a, VE&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;VE: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a>,&nbsp;</span>",synthetic:true,types:["tower_grpc::metadata::map::VacantEntry"]},{text:"impl&lt;'a, VE&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> for <a class=\"struct\" href=\"tower_grpc/metadata/struct.OccupiedEntry.html\" title=\"struct tower_grpc::metadata::OccupiedEntry\">OccupiedEntry</a>&lt;'a, VE&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;VE: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a>,&nbsp;</span>",synthetic:true,types:["tower_grpc::metadata::map::OccupiedEntry"]},{text:"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> for <a class=\"enum\" href=\"tower_grpc/metadata/enum.Ascii.html\" title=\"enum tower_grpc::metadata::Ascii\">Ascii</a>",synthetic:true,types:["tower_grpc::metadata::encoding::Ascii"]},{text:"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> for <a class=\"enum\" href=\"tower_grpc/metadata/enum.Binary.html\" title=\"enum tower_grpc::metadata::Binary\">Binary</a>",synthetic:true,types:["tower_grpc::metadata::encoding::Binary"]},{text:"impl&lt;'a&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> for <a class=\"enum\" href=\"tower_grpc/metadata/enum.KeyRef.html\" title=\"enum tower_grpc::metadata::KeyRef\">KeyRef</a>&lt;'a&gt;",synthetic:true,types:["tower_grpc::metadata::map::KeyRef"]},{text:"impl&lt;'a&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> for <a class=\"enum\" href=\"tower_grpc/metadata/enum.KeyAndValueRef.html\" title=\"enum tower_grpc::metadata::KeyAndValueRef\">KeyAndValueRef</a>&lt;'a&gt;",synthetic:true,types:["tower_grpc::metadata::map::KeyAndValueRef"]},{text:"impl&lt;'a&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> for <a class=\"enum\" href=\"tower_grpc/metadata/enum.KeyAndMutValueRef.html\" title=\"enum tower_grpc::metadata::KeyAndMutValueRef\">KeyAndMutValueRef</a>&lt;'a&gt;",synthetic:true,types:["tower_grpc::metadata::map::KeyAndMutValueRef"]},{text:"impl&lt;'a&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> for <a class=\"enum\" href=\"tower_grpc/metadata/enum.ValueRef.html\" title=\"enum tower_grpc::metadata::ValueRef\">ValueRef</a>&lt;'a&gt;",synthetic:true,types:["tower_grpc::metadata::map::ValueRef"]},{text:"impl&lt;'a&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> for <a class=\"enum\" href=\"tower_grpc/metadata/enum.ValueRefMut.html\" title=\"enum tower_grpc::metadata::ValueRefMut\">ValueRefMut</a>&lt;'a&gt;",synthetic:true,types:["tower_grpc::metadata::map::ValueRefMut"]},{text:"impl&lt;'a, VE&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> for <a class=\"enum\" href=\"tower_grpc/metadata/enum.Entry.html\" title=\"enum tower_grpc::metadata::Entry\">Entry</a>&lt;'a, VE&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;VE: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a>,&nbsp;</span>",synthetic:true,types:["tower_grpc::metadata::map::Entry"]},{text:"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> for <a class=\"struct\" href=\"tower_grpc/metadata/errors/struct.InvalidMetadataValue.html\" title=\"struct tower_grpc::metadata::errors::InvalidMetadataValue\">InvalidMetadataValue</a>",synthetic:true,types:["tower_grpc::metadata::encoding::InvalidMetadataValue"]},{text:"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> for <a class=\"struct\" href=\"tower_grpc/metadata/errors/struct.InvalidMetadataValueBytes.html\" title=\"struct tower_grpc::metadata::errors::InvalidMetadataValueBytes\">InvalidMetadataValueBytes</a>",synthetic:true,types:["tower_grpc::metadata::encoding::InvalidMetadataValueBytes"]},{text:"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> for <a class=\"struct\" href=\"tower_grpc/metadata/errors/struct.InvalidMetadataKey.html\" title=\"struct tower_grpc::metadata::errors::InvalidMetadataKey\">InvalidMetadataKey</a>",synthetic:true,types:["tower_grpc::metadata::key::InvalidMetadataKey"]},{text:"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> for <a class=\"struct\" href=\"tower_grpc/metadata/errors/struct.ToStrError.html\" title=\"struct tower_grpc::metadata::errors::ToStrError\">ToStrError</a>",synthetic:true,types:["tower_grpc::metadata::value::ToStrError"]},{text:"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> for <a class=\"enum\" href=\"tower_grpc/codegen/server/grpc/enum.Never.html\" title=\"enum tower_grpc::codegen::server::grpc::Never\">Never</a>",synthetic:true,types:["tower_grpc::error::Never"]},{text:"impl&lt;T, S&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> for <a class=\"struct\" href=\"tower_grpc/server/client_streaming/struct.ResponseFuture.html\" title=\"struct tower_grpc::server::client_streaming::ResponseFuture\">ResponseFuture</a>&lt;T, S&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;T as <a class=\"trait\" href=\"tower_grpc/generic/server/trait.ClientStreamingService.html\" title=\"trait tower_grpc::generic::server::ClientStreamingService\">ClientStreamingService</a>&lt;S&gt;&gt;::<a class=\"type\" href=\"tower_grpc/generic/server/trait.ClientStreamingService.html#associatedtype.Future\" title=\"type tower_grpc::generic::server::ClientStreamingService::Future\">Future</a>: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;T as <a class=\"trait\" href=\"tower_grpc/generic/server/trait.ClientStreamingService.html\" title=\"trait tower_grpc::generic::server::ClientStreamingService\">ClientStreamingService</a>&lt;S&gt;&gt;::<a class=\"type\" href=\"tower_grpc/generic/server/trait.ClientStreamingService.html#associatedtype.Response\" title=\"type tower_grpc::generic::server::ClientStreamingService::Response\">Response</a>: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a>,&nbsp;</span>",synthetic:true,types:["tower_grpc::server::client_streaming::ResponseFuture"]},{text:"impl&lt;T, B, R&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> for <a class=\"struct\" href=\"tower_grpc/server/server_streaming/struct.ResponseFuture.html\" title=\"struct tower_grpc::server::server_streaming::ResponseFuture\">ResponseFuture</a>&lt;T, B, R&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;B: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;T: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;T as <a class=\"trait\" href=\"tower_grpc/generic/server/trait.ServerStreamingService.html\" title=\"trait tower_grpc::generic::server::ServerStreamingService\">ServerStreamingService</a>&lt;R&gt;&gt;::<a class=\"type\" href=\"tower_grpc/generic/server/trait.ServerStreamingService.html#associatedtype.Future\" title=\"type tower_grpc::generic::server::ServerStreamingService::Future\">Future</a>: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;B as <a class=\"trait\" href=\"tower_grpc/codegen/server/grpc/trait.Body.html\" title=\"trait tower_grpc::codegen::server::grpc::Body\">Body</a>&gt;::<a class=\"type\" href=\"tower_grpc/codegen/server/grpc/trait.Body.html#associatedtype.Item\" title=\"type tower_grpc::codegen::server::grpc::Body::Item\">Item</a>: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;T as <a class=\"trait\" href=\"tower_grpc/generic/server/trait.ServerStreamingService.html\" title=\"trait tower_grpc::generic::server::ServerStreamingService\">ServerStreamingService</a>&lt;R&gt;&gt;::<a class=\"type\" href=\"tower_grpc/generic/server/trait.ServerStreamingService.html#associatedtype.Response\" title=\"type tower_grpc::generic::server::ServerStreamingService::Response\">Response</a>: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a>,&nbsp;</span>",synthetic:true,types:["tower_grpc::server::server_streaming::ResponseFuture"]},{text:"impl&lt;T, S&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> for <a class=\"struct\" href=\"tower_grpc/server/streaming/struct.ResponseFuture.html\" title=\"struct tower_grpc::server::streaming::ResponseFuture\">ResponseFuture</a>&lt;T, S&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;T as <a class=\"trait\" href=\"tower_grpc/generic/server/trait.StreamingService.html\" title=\"trait tower_grpc::generic::server::StreamingService\">StreamingService</a>&lt;S&gt;&gt;::<a class=\"type\" href=\"tower_grpc/generic/server/trait.StreamingService.html#associatedtype.Future\" title=\"type tower_grpc::generic::server::StreamingService::Future\">Future</a>: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a>,&nbsp;</span>",synthetic:true,types:["tower_grpc::server::streaming::ResponseFuture"]},{text:"impl&lt;T, B, R&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> for <a class=\"struct\" href=\"tower_grpc/server/unary/struct.ResponseFuture.html\" title=\"struct tower_grpc::server::unary::ResponseFuture\">ResponseFuture</a>&lt;T, B, R&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;B: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;T: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;T as <a class=\"trait\" href=\"tower_grpc/generic/server/trait.UnaryService.html\" title=\"trait tower_grpc::generic::server::UnaryService\">UnaryService</a>&lt;R&gt;&gt;::<a class=\"type\" href=\"tower_grpc/generic/server/trait.UnaryService.html#associatedtype.Future\" title=\"type tower_grpc::generic::server::UnaryService::Future\">Future</a>: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;B as <a class=\"trait\" href=\"tower_grpc/codegen/server/grpc/trait.Body.html\" title=\"trait tower_grpc::codegen::server::grpc::Body\">Body</a>&gt;::<a class=\"type\" href=\"tower_grpc/codegen/server/grpc/trait.Body.html#associatedtype.Item\" title=\"type tower_grpc::codegen::server::grpc::Body::Item\">Item</a>: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a>,&nbsp;</span>",synthetic:true,types:["tower_grpc::server::unary::ResponseFuture"]},{text:"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> for <a class=\"struct\" href=\"tower_grpc/server/unimplemented/struct.ResponseFuture.html\" title=\"struct tower_grpc::server::unimplemented::ResponseFuture\">ResponseFuture</a>",synthetic:true,types:["tower_grpc::server::unimplemented::ResponseFuture"]},{text:"impl&lt;'a&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> for <a class=\"struct\" href=\"tower_grpc/metadata/struct.Iter.html\" title=\"struct tower_grpc::metadata::Iter\">Iter</a>&lt;'a&gt;",synthetic:false,types:["tower_grpc::metadata::map::Iter"]},{text:"impl&lt;'a, VE:&nbsp;ValueEncoding&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> for <a class=\"struct\" href=\"tower_grpc/metadata/struct.ValueDrain.html\" title=\"struct tower_grpc::metadata::ValueDrain\">ValueDrain</a>&lt;'a, VE&gt;",synthetic:false,types:["tower_grpc::metadata::map::ValueDrain"]},];

            if (window.register_implementors) {
                window.register_implementors(implementors);
            } else {
                window.pending_implementors = implementors;
            }
        
})()
