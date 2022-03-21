(window.webpackJsonp=window.webpackJsonp||[]).push([[61],{1566:function(n,a,s){n.exports={maxTime:s(1628)}},1628:function(n,a){n.exports={content:["article",["p","使用 ",["code","maxTime"],"，",["code","minTime"],"，",["code","disabledHours"]," 限制可选择的时间："],["pre",{lang:"jsx",highlighted:'  <span class="token comment" spellcheck="true">/**\n   * 示例限制：06:27 - 23:45，且 12 点不能选。\n   */</span>\n\n  <span class="token keyword">const</span> <span class="token punctuation">[</span>value<span class="token punctuation">,</span> setValue<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">useState</span><span class="token punctuation">(</span><span class="token string">"19:00"</span><span class="token punctuation">)</span>\n\n  <span class="token keyword">return</span> <span class="token punctuation">(</span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>React.Fragment</span><span class="token punctuation">></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>TimePicker</span>\n        <span class="token attr-name">key</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token number">0</span><span class="token punctuation">}</span></span>\n        <span class="token attr-name">minTime</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>06:27<span class="token punctuation">"</span></span>\n        <span class="token attr-name">maxTime</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>23:45<span class="token punctuation">"</span></span>\n        <span class="token attr-name">disabledHours</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span>hour <span class="token operator">=</span><span class="token operator">></span> hour <span class="token operator">===</span> <span class="token string">"12"</span><span class="token punctuation">}</span></span>\n        <span class="token attr-name">style</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span> marginRight<span class="token punctuation">:</span> <span class="token string">"16px"</span> <span class="token punctuation">}</span><span class="token punctuation">}</span></span>\n        <span class="token attr-name">value</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span>value<span class="token punctuation">}</span></span>\n        <span class="token attr-name">onChange</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span>val <span class="token operator">=</span><span class="token operator">></span> <span class="token function">setValue</span><span class="token punctuation">(</span>val<span class="token punctuation">)</span><span class="token punctuation">}</span></span>\n      <span class="token punctuation">/></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>TimePicker</span>\n        <span class="token attr-name">key</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token number">1</span><span class="token punctuation">}</span></span>\n        <span class="token attr-name">onlyHour</span>\n        <span class="token attr-name">minTime</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>06:00<span class="token punctuation">"</span></span>\n        <span class="token attr-name">maxTime</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>21:00<span class="token punctuation">"</span></span>\n        <span class="token attr-name">disabledHours</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span>hour <span class="token operator">=</span><span class="token operator">></span> hour <span class="token operator">===</span> <span class="token string">"12"</span><span class="token punctuation">}</span></span>\n        <span class="token attr-name">placeholder</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>整点<span class="token punctuation">"</span></span>\n      <span class="token punctuation">/></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>React.Fragment</span><span class="token punctuation">></span></span>\n  <span class="token punctuation">)</span>'},["code",'  /**\n   * 示例限制：06:27 - 23:45，且 12 点不能选。\n   */\n\n  const [value, setValue] = useState("19:00")\n\n  return (\n    <React.Fragment>\n      <TimePicker\n        key={0}\n        minTime="06:27"\n        maxTime="23:45"\n        disabledHours={hour => hour === "12"}\n        style={{ marginRight: "16px" }}\n        value={value}\n        onChange={val => setValue(val)}\n      />\n      <TimePicker\n        key={1}\n        onlyHour\n        minTime="06:00"\n        maxTime="21:00"\n        disabledHours={hour => hour === "12"}\n        placeholder="整点"\n      />\n    </React.Fragment>\n  )']]],meta:{order:0,title:{"zh-CN":"限制选择","en-US":"DisabledTimes"},filename:"components/time-picker/demo/maxTime.md"}}}}]);