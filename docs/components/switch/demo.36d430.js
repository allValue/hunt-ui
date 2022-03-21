(window.webpackJsonp=window.webpackJsonp||[]).push([[53],{1558:function(n,a,s){n.exports={basic:s(1616)}},1616:function(n,a){n.exports={content:["article",["p","开关展开或收起内容："],["pre",{lang:"jsx",highlighted:'  <span class="token keyword">const</span> <span class="token punctuation">[</span>checked<span class="token punctuation">,</span> setChecked<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">useState</span><span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span>\n\n  <span class="token keyword">return</span> <span class="token punctuation">(</span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Form</span>\n      <span class="token attr-name">labelSize</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token number">6</span><span class="token punctuation">}</span></span>\n      <span class="token attr-name">style</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span> width<span class="token punctuation">:</span> <span class="token string">"40%"</span> <span class="token punctuation">}</span><span class="token punctuation">}</span></span>\n    <span class="token punctuation">></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Form.Item</span> <span class="token attr-name">label</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>自动扩量<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Switch</span>\n          <span class="token attr-name">checked</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span>checked<span class="token punctuation">}</span></span>\n          <span class="token attr-name">onChange</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span>bool <span class="token operator">=</span><span class="token operator">></span> <span class="token function">setChecked</span><span class="token punctuation">(</span>bool<span class="token punctuation">)</span><span class="token punctuation">}</span></span>\n          <span class="token attr-name">checkedText</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>已开启<span class="token punctuation">"</span></span>\n          <span class="token attr-name">unCheckedText</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>未开启<span class="token punctuation">"</span></span>\n        <span class="token punctuation">/></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Form.Item</span><span class="token punctuation">></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Motion</span>\n        <span class="token attr-name">transition</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>zoom<span class="token punctuation">"</span></span>\n      <span class="token punctuation">></span></span>\n        <span class="token punctuation">{</span>\n          checked <span class="token operator">&amp;&amp;</span> <span class="token punctuation">(</span>\n            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Form.Item</span> <span class="token attr-name">label</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>不可突破定向<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n              <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Checkbox.Group</span><span class="token punctuation">></span></span>\n                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Checkbox</span><span class="token punctuation">></span></span>地域<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Checkbox</span><span class="token punctuation">></span></span>\n                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Checkbox</span><span class="token punctuation">></span></span>年龄<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Checkbox</span><span class="token punctuation">></span></span>\n                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Checkbox</span><span class="token punctuation">></span></span>性别<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Checkbox</span><span class="token punctuation">></span></span>\n              <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Checkbox.Group</span><span class="token punctuation">></span></span>\n            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Form.Item</span><span class="token punctuation">></span></span>\n          <span class="token punctuation">)</span>\n        <span class="token punctuation">}</span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Motion</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Form</span><span class="token punctuation">></span></span>\n  <span class="token punctuation">)</span>'},["code",'  const [checked, setChecked] = useState(true)\n\n  return (\n    <Form\n      labelSize={6}\n      style={{ width: "40%" }}\n    >\n      <Form.Item label="自动扩量">\n        <Switch\n          checked={checked}\n          onChange={bool => setChecked(bool)}\n          checkedText="已开启"\n          unCheckedText="未开启"\n        />\n      </Form.Item>\n      <Motion\n        transition="zoom"\n      >\n        {\n          checked && (\n            <Form.Item label="不可突破定向">\n              <Checkbox.Group>\n                <Checkbox>地域</Checkbox>\n                <Checkbox>年龄</Checkbox>\n                <Checkbox>性别</Checkbox>\n              </Checkbox.Group>\n            </Form.Item>\n          )\n        }\n      </Motion>\n    </Form>\n  )']]],meta:{order:0,title:{"zh-CN":"内部驱动","en-US":"Type"},filename:"components/switch/demo/basic.md"}}}}]);