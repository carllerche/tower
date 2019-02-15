(function() {var implementors = {};
implementors["tower_util"] = [{text:"impl&lt;T, F, Request&gt; <a class=\"trait\" href=\"tower_direct_service/trait.DirectService.html\" title=\"trait tower_direct_service::DirectService\">DirectService</a>&lt;Request&gt; for <a class=\"struct\" href=\"tower_util/struct.ServiceFn.html\" title=\"struct tower_util::ServiceFn\">ServiceFn</a>&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/function/trait.Fn.html\" title=\"trait core::ops::function::Fn\">Fn</a>(Request) -&gt; F,<br>&nbsp;&nbsp;&nbsp;&nbsp;F: <a class=\"trait\" href=\"https://docs.rs/futures/0.1/futures/future/trait.IntoFuture.html\" title=\"trait futures::future::IntoFuture\">IntoFuture</a>,&nbsp;</span>",synthetic:false,types:["tower_util::service_fn::ServiceFn"]},];

            if (window.register_implementors) {
                window.register_implementors(implementors);
            } else {
                window.pending_implementors = implementors;
            }
        
})()
