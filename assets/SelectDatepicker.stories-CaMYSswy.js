import{j as C}from"./jsx-runtime-Bu-hD8B3.js";import{R as e}from"./iframe-CAuiQoWu.js";import{S as g}from"./SelectDatepicker-C4FRW4Et.js";import"./preload-helper-PPVm8Dsz.js";class B extends e.Component{constructor(){super(...arguments),this.state={hasError:!1}}static getDerivedStateFromError(a){return{hasError:!0,error:a}}componentDidCatch(a){}render(){const{hasError:a,error:n}=this.state,{children:s,fallback:D,renderFallback:h}=this.props;return a?h&&n?h(n):D||C.jsx("div",{role:"alert",style:{padding:"12px"},children:"Something went wrong while rendering the date picker."}):s}}B.__docgenInfo={description:"",methods:[],displayName:"SelectDatepickerErrorBoundary",props:{children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},fallback:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},renderFallback:{required:!1,tsType:{name:"signature",type:"function",raw:"(error: Error) => React.ReactNode",signature:{arguments:[{type:{name:"Error"},name:"error"}],return:{name:"ReactReactNode",raw:"React.ReactNode"}}},description:""}}};const T=t=>typeof t=="number"?new Date(t):typeof t=="string"&&t.trim().length>0?new Date(t):t instanceof Date?t:null,l=t=>{if(typeof t=="number")return new Date(t);if(typeof t=="string"&&t.trim().length>0)return new Date(t);if(t instanceof Date)return t},x=t=>{const a=T(t),[n,s]=e.useState(a);return e.useEffect(()=>{t!==void 0&&s(a)},[t,a]),[n,s,n??a]},p=t=>t.map((a,n)=>e.isValidElement(a)?e.cloneElement(a,{key:a.key??n}):a),u=t=>t?e.createElement("div",{style:{marginTop:"10px",padding:"10px",background:"#f6f8fa"}},p([e.createElement("strong",null,"Selected: "),e.createElement("span",null,t.toDateString())])):null,I={title:"SelectDatepicker",component:g,parameters:{layout:"centered"},args:{order:"month/day/year",reverseYears:!1,hideLabels:!1,disabled:!1,hasError:!1,labels:{},selectedDate:void 0,minDate:void 0,maxDate:void 0},argTypes:{order:{control:{type:"select"}},reverseYears:{control:"boolean"},hideLabels:{control:"boolean"},disabled:{control:"boolean"},hasError:{control:"boolean"},labels:{control:"object"},selectedDate:{control:"date"},minDate:{control:"date"},maxDate:{control:"date"},onDateChange:{table:{disable:!0}},value:{table:{disable:!0}},onChange:{table:{disable:!0}}}},b={render:t=>{const{selectedDate:a,minDate:n,maxDate:s,onChange:D,onDateChange:h,...o}=t,[c,i,m]=x(a),r=e.useCallback(d=>{i(d)},[]);return e.createElement("div",{style:{padding:"20px",maxWidth:"400px"}},p([e.createElement(g,{...o,selectedDate:c,onDateChange:r,onChange:r,minDate:l(n),maxDate:l(s)}),u(m)]))}},E={render:t=>{const{selectedDate:a,minDate:n,maxDate:s,onChange:D,onDateChange:h,...o}=t,[c,i,m]=x(a),r=e.useCallback(S=>{i(S)},[]),d=l(n)??new Date(2023,0,1),y=l(s)??new Date(2025,11,31);return e.createElement("div",{style:{padding:"20px",maxWidth:"400px"}},p([e.createElement("h3",null,"With Date Range"),e.createElement("p",{style:{marginBottom:"12px",color:"#555"}},"Allowed range: Jan 1, 2023 – Dec 31, 2025"),e.createElement(g,{...o,selectedDate:c,onDateChange:r,onChange:r,minDate:d,maxDate:y}),u(m)]))}},v={render:t=>{const{selectedDate:a,labels:n,minDate:s,maxDate:D,onChange:h,onDateChange:o,...c}=t,[i,m,r]=x(a),d=e.useCallback(S=>{m(S)},[]),y={1:"Enero",2:"Febrero",3:"Marzo",4:"Abril",5:"Mayo",6:"Junio",7:"Julio",8:"Agosto",9:"Septiembre",10:"Octubre",11:"Noviembre",12:"Diciembre"};return e.createElement("div",{style:{padding:"20px",maxWidth:"400px"}},p([e.createElement("h3",null,"Custom Labels + Months (Spanish)"),e.createElement(g,{...c,selectedDate:i,onDateChange:d,onChange:d,minDate:l(s),maxDate:l(D),labels:{groupLabel:"Selecciona tu fecha de viaje",yearLabel:"Año",monthLabel:"Mes",dayLabel:"Día",yearPlaceholder:"Selecciona año",monthPlaceholder:"Selecciona mes",dayPlaceholder:"Selecciona día",months:y,...n}}),u(r),e.createElement("div",{style:{marginTop:"10px",color:"#555",fontSize:"13px"}},Object.values(y).join(" · "))]))},args:{order:"day/month/year"}},f={render:t=>{const{selectedDate:a,minDate:n,maxDate:s,onChange:D,onDateChange:h,...o}=t,[c,i,m]=x(a),r=e.useCallback(d=>{i(d)},[]);return e.createElement("div",{style:{padding:"20px",maxWidth:"400px"}},p([e.createElement("h3",null,"Different Order (Day/Month/Year)"),e.createElement(g,{...o,selectedDate:c,onDateChange:r,onChange:r,minDate:l(n),maxDate:l(s)}),u(m)]))},args:{order:"day/month/year"}},R={render:t=>{const a=new Date,{minDate:n,maxDate:s,onChange:D,onDateChange:h,...o}=t;return e.createElement("div",{style:{padding:"20px",maxWidth:"400px"}},p([e.createElement("h3",null,"Disabled State"),e.createElement(g,{...o,selectedDate:a,onDateChange:()=>{},onChange:()=>{},minDate:l(n),maxDate:l(s)}),u(a)]))},args:{disabled:!0}},k={render:t=>{const{selectedDate:a,minDate:n,maxDate:s,onChange:D,onDateChange:h,...o}=t,[c,i,m]=x(a),r=e.useCallback(d=>{i(d)},[]);return e.createElement("div",{style:{padding:"20px",maxWidth:"400px"}},p([e.createElement("h3",null,"Error State"),e.createElement(g,{...o,id:"error-state",selectedDate:c,onDateChange:r,onChange:r,minDate:l(n),maxDate:l(s)}),u(m)]))},args:{hasError:!0}},w={render:t=>{const{selectedDate:a,minDate:n,maxDate:s,onChange:D,onDateChange:h,...o}=t,[c,i,m]=x(a),r=e.useCallback(d=>{i(d)},[]);return e.createElement("div",{style:{padding:"20px",maxWidth:"400px"}},p([e.createElement("h3",null,"Hidden Labels"),e.createElement(g,{...o,id:"hidden-labels",selectedDate:c,onDateChange:r,onChange:r,minDate:l(n),maxDate:l(s)}),u(m)]))},args:{hideLabels:!0}},W={render:t=>{const{selectedDate:a,minDate:n,maxDate:s,onChange:D,onDateChange:h,...o}=t,[c,i,m]=x(a),r=e.useCallback(d=>{i(d)},[]);return e.createElement("div",{style:{padding:"20px",maxWidth:"400px"}},p([e.createElement("h3",null,"Reverse Years"),e.createElement(g,{...o,id:"reverse-years",selectedDate:c,onDateChange:r,onChange:r,minDate:l(n),maxDate:l(s)}),u(m)]))},args:{reverseYears:!0}},O={render:t=>{const{selectedDate:a,minDate:n,maxDate:s,onChange:D,onDateChange:h,...o}=t,[c,i,m]=x(a),r=e.useCallback(d=>{i(d)},[]);return e.createElement("div",{style:{padding:"20px",maxWidth:"440px"}},p([e.createElement("h3",null,"Smart Date Correction"),e.createElement("p",{style:{marginBottom:"12px"}},"Try selecting Jan 31, then switch month to February."),e.createElement(g,{...o,id:"smart-correction",selectedDate:c,onDateChange:r,onChange:r,minDate:l(n),maxDate:l(s)}),u(m)]))}},A={render:t=>{const{selectedDate:a,minDate:n,maxDate:s,onChange:D,onDateChange:h,...o}=t,[c,i,m]=x(a),r=e.useCallback(S=>{i(S)},[]),d=l(n)??new Date(2020,0,1),y=l(s)??new Date(2025,11,31);return e.createElement("div",{style:{padding:"20px",maxWidth:"460px"}},p([e.createElement("h3",null,"Range Limits"),e.createElement("p",{style:{marginBottom:"12px"}},"Range: 2020-01-01 to 2025-12-31"),e.createElement(g,{...o,id:"range-limits",selectedDate:c,onDateChange:r,onChange:r,minDate:d,maxDate:y}),u(m)]))}},M={render:t=>{const{selectedDate:a,minDate:n,maxDate:s,onChange:D,onDateChange:h,...o}=t,[c,i,m]=x(a),r=e.useCallback(d=>{i(d)},[]);return e.createElement("div",{style:{padding:"20px",maxWidth:"420px"}},p([e.createElement("h3",null,"Invalid Order Fallback"),e.createElement("p",{style:{marginBottom:"12px"}},"Passing an invalid order falls back to month/day/year."),e.createElement(g,{...o,id:"invalid-order",selectedDate:c,onDateChange:r,onChange:r,minDate:l(n),maxDate:l(s)}),u(m)]))},args:{order:"month-year-day"}},L={render:t=>{const{selectedDate:a,minDate:n,maxDate:s,className:D,onChange:h,onDateChange:o,...c}=t,[i,m,r]=x(a),d=e.useCallback(y=>{m(y)},[]);return e.createElement("div",{style:{padding:"20px",maxWidth:"880px"}},p([e.createElement("h3",null,"Theming Overrides (CSS Vars)"),e.createElement("p",{style:{marginBottom:"12px"}},"These styles are applied via CSS custom properties on the root element."),e.createElement(g,{...c,id:"theme-overrides",selectedDate:i,onDateChange:d,onChange:d,minDate:l(n),maxDate:l(s),className:D||"rsd-theme-aurora"}),u(r),e.createElement("style",null,`.rsd-theme-aurora {
            --rsd-gap: 14px;
            --rsd-legend-font-size: 18px;
            --rsd-legend-font-weight: 700;
            --rsd-error-color: #dc2626;
            --rsd-select-padding: 12px 14px;
            --rsd-select-border: 1px solid rgba(15, 23, 42, 0.15);
            --rsd-select-border-radius: 14px;
            --rsd-select-font-size: 15px;
            --rsd-select-font-family: 'Inter', system-ui, -apple-system, 'Segoe UI', sans-serif;
            --rsd-select-hover-border: rgba(37, 99, 235, 0.55);
            --rsd-select-focus-border: #2563eb;
            --rsd-select-focus-ring: 0 0 0 4px rgba(37, 99, 235, 0.2);
            --rsd-select-disabled-bg: rgba(15, 23, 42, 0.06);
            --rsd-select-disabled-color: rgba(15, 23, 42, 0.45);
            --rsd-required-color: #16a34a;

            background: linear-gradient(135deg, rgba(14, 116, 144, 0.08), rgba(59, 130, 246, 0.06)),
              radial-gradient(circle at top right, rgba(16, 185, 129, 0.18), transparent 55%);
            padding: 22px 24px;
            border-radius: 20px;
            border: 1px solid rgba(59, 130, 246, 0.2);
            box-shadow: 0 20px 40px rgba(15, 23, 42, 0.08);
          }

          .rsd-theme-aurora .rsd__legend {
            color: #0f172a;
            letter-spacing: 0.02em;
          }

          .rsd-theme-aurora .rsd__select {
            background: rgba(255, 255, 255, 0.85);
            color: #0f172a;
            font-weight: 600;
            width: 100%;
            max-width: 100%;
            box-sizing: border-box;
          }

          .rsd-theme-aurora .rsd__select-row {
            flex-wrap: nowrap;
            gap: 16px;
          }

          .rsd-theme-aurora .rsd__label {
            text-transform: uppercase;
            letter-spacing: 0.08em;
            font-size: 12px;
            color: rgba(15, 23, 42, 0.6);
          }

          .rsd-theme-aurora .rsd__error-message {
            background: rgba(248, 113, 113, 0.12);
            padding: 10px 12px;
            border-radius: 12px;
            font-weight: 600;
          }`)]))}},j=()=>{throw new Error("Intentional render error")},_={render:()=>C.jsxs("div",{style:{padding:"20px",maxWidth:"480px"},children:[C.jsx("h3",{children:"Error Boundary"}),C.jsx("p",{style:{marginBottom:"12px"},children:"This example intentionally throws to demonstrate the fallback UI."}),C.jsx(B,{renderFallback:t=>C.jsxs("div",{role:"alert",style:{padding:"12px",borderRadius:"8px",background:"#fff1f2",color:"#9f1239"},children:["Error: ",t.message]}),children:C.jsx(j,{})})]})};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  render: (args: any) => {
    const {
      selectedDate,
      minDate,
      maxDate,
      onChange,
      onDateChange,
      ...rest
    } = args;
    const [selected, setSelected, displaySelected] = useStoryDateState(selectedDate);
    const handleDateChange = React.useCallback(date => {
      setSelected(date);
    }, []);
    return React.createElement('div', {
      style: {
        padding: '20px',
        maxWidth: '400px'
      }
    }, withKeys([React.createElement(SelectDatepicker, {
      ...rest,
      selectedDate: selected,
      onDateChange: handleDateChange,
      onChange: handleDateChange,
      minDate: resolveOptionalDateArg(minDate),
      maxDate: resolveOptionalDateArg(maxDate)
    }), renderSelectedDate(displaySelected)]));
  }
}`,...b.parameters?.docs?.source}}};E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  render: (args: any) => {
    const {
      selectedDate,
      minDate,
      maxDate,
      onChange,
      onDateChange,
      ...rest
    } = args;
    const [selected, setSelected, displaySelected] = useStoryDateState(selectedDate);
    const handleDateChange = React.useCallback(date => {
      setSelected(date);
    }, []);
    const resolvedMinDate = resolveOptionalDateArg(minDate) ?? new Date(2023, 0, 1);
    const resolvedMaxDate = resolveOptionalDateArg(maxDate) ?? new Date(2025, 11, 31);
    return React.createElement('div', {
      style: {
        padding: '20px',
        maxWidth: '400px'
      }
    }, withKeys([React.createElement('h3', null, 'With Date Range'), React.createElement('p', {
      style: {
        marginBottom: '12px',
        color: '#555'
      }
    }, 'Allowed range: Jan 1, 2023 – Dec 31, 2025'), React.createElement(SelectDatepicker, {
      ...rest,
      selectedDate: selected,
      onDateChange: handleDateChange,
      onChange: handleDateChange,
      minDate: resolvedMinDate,
      maxDate: resolvedMaxDate
    }), renderSelectedDate(displaySelected)]));
  }
}`,...E.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  render: (args: any) => {
    const {
      selectedDate,
      labels,
      minDate,
      maxDate,
      onChange,
      onDateChange,
      ...rest
    } = args;
    const [selected, setSelected, displaySelected] = useStoryDateState(selectedDate);
    const handleDateChange = React.useCallback(date => {
      setSelected(date);
    }, []);
    const spanishMonths = {
      1: 'Enero',
      2: 'Febrero',
      3: 'Marzo',
      4: 'Abril',
      5: 'Mayo',
      6: 'Junio',
      7: 'Julio',
      8: 'Agosto',
      9: 'Septiembre',
      10: 'Octubre',
      11: 'Noviembre',
      12: 'Diciembre'
    } as const;
    return React.createElement('div', {
      style: {
        padding: '20px',
        maxWidth: '400px'
      }
    }, withKeys([React.createElement('h3', null, 'Custom Labels + Months (Spanish)'), React.createElement(SelectDatepicker, {
      ...rest,
      selectedDate: selected,
      onDateChange: handleDateChange,
      onChange: handleDateChange,
      minDate: resolveOptionalDateArg(minDate),
      maxDate: resolveOptionalDateArg(maxDate),
      labels: {
        groupLabel: 'Selecciona tu fecha de viaje',
        yearLabel: 'Año',
        monthLabel: 'Mes',
        dayLabel: 'Día',
        yearPlaceholder: 'Selecciona año',
        monthPlaceholder: 'Selecciona mes',
        dayPlaceholder: 'Selecciona día',
        months: spanishMonths,
        ...labels
      }
    }), renderSelectedDate(displaySelected), React.createElement('div', {
      style: {
        marginTop: '10px',
        color: '#555',
        fontSize: '13px'
      }
    }, Object.values(spanishMonths).join(' · '))]));
  },
  args: {
    order: 'day/month/year'
  }
}`,...v.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  render: (args: any) => {
    const {
      selectedDate,
      minDate,
      maxDate,
      onChange,
      onDateChange,
      ...rest
    } = args;
    const [selected, setSelected, displaySelected] = useStoryDateState(selectedDate);
    const handleDateChange = React.useCallback(date => {
      setSelected(date);
    }, []);
    return React.createElement('div', {
      style: {
        padding: '20px',
        maxWidth: '400px'
      }
    }, withKeys([React.createElement('h3', null, 'Different Order (Day/Month/Year)'), React.createElement(SelectDatepicker, {
      ...rest,
      selectedDate: selected,
      onDateChange: handleDateChange,
      onChange: handleDateChange,
      minDate: resolveOptionalDateArg(minDate),
      maxDate: resolveOptionalDateArg(maxDate)
    }), renderSelectedDate(displaySelected)]));
  },
  args: {
    order: 'day/month/year'
  }
}`,...f.parameters?.docs?.source}}};R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`{
  render: (args: any) => {
    const selectedDate = new Date();
    const {
      minDate,
      maxDate,
      onChange,
      onDateChange,
      ...rest
    } = args;
    return React.createElement('div', {
      style: {
        padding: '20px',
        maxWidth: '400px'
      }
    }, withKeys([React.createElement('h3', null, 'Disabled State'), React.createElement(SelectDatepicker, {
      ...rest,
      selectedDate: selectedDate,
      onDateChange: () => {},
      onChange: () => {},
      minDate: resolveOptionalDateArg(minDate),
      maxDate: resolveOptionalDateArg(maxDate)
    }), renderSelectedDate(selectedDate)]));
  },
  args: {
    disabled: true
  }
}`,...R.parameters?.docs?.source}}};k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  render: (args: any) => {
    const {
      selectedDate,
      minDate,
      maxDate,
      onChange,
      onDateChange,
      ...rest
    } = args;
    const [selected, setSelected, displaySelected] = useStoryDateState(selectedDate);
    const handleDateChange = React.useCallback((date: Date | null) => {
      setSelected(date);
    }, []);
    return React.createElement('div', {
      style: {
        padding: '20px',
        maxWidth: '400px'
      }
    }, withKeys([React.createElement('h3', null, 'Error State'), React.createElement(SelectDatepicker, {
      ...rest,
      id: 'error-state',
      selectedDate: selected,
      onDateChange: handleDateChange,
      onChange: handleDateChange,
      minDate: resolveOptionalDateArg(minDate),
      maxDate: resolveOptionalDateArg(maxDate)
    }), renderSelectedDate(displaySelected)]));
  },
  args: {
    hasError: true
  }
}`,...k.parameters?.docs?.source}}};w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  render: (args: any) => {
    const {
      selectedDate,
      minDate,
      maxDate,
      onChange,
      onDateChange,
      ...rest
    } = args;
    const [selected, setSelected, displaySelected] = useStoryDateState(selectedDate);
    const handleDateChange = React.useCallback((date: Date | null) => {
      setSelected(date);
    }, []);
    return React.createElement('div', {
      style: {
        padding: '20px',
        maxWidth: '400px'
      }
    }, withKeys([React.createElement('h3', null, 'Hidden Labels'), React.createElement(SelectDatepicker, {
      ...rest,
      id: 'hidden-labels',
      selectedDate: selected,
      onDateChange: handleDateChange,
      onChange: handleDateChange,
      minDate: resolveOptionalDateArg(minDate),
      maxDate: resolveOptionalDateArg(maxDate)
    }), renderSelectedDate(displaySelected)]));
  },
  args: {
    hideLabels: true
  }
}`,...w.parameters?.docs?.source}}};W.parameters={...W.parameters,docs:{...W.parameters?.docs,source:{originalSource:`{
  render: (args: any) => {
    const {
      selectedDate,
      minDate,
      maxDate,
      onChange,
      onDateChange,
      ...rest
    } = args;
    const [selected, setSelected, displaySelected] = useStoryDateState(selectedDate);
    const handleDateChange = React.useCallback((date: Date | null) => {
      setSelected(date);
    }, []);
    return React.createElement('div', {
      style: {
        padding: '20px',
        maxWidth: '400px'
      }
    }, withKeys([React.createElement('h3', null, 'Reverse Years'), React.createElement(SelectDatepicker, {
      ...rest,
      id: 'reverse-years',
      selectedDate: selected,
      onDateChange: handleDateChange,
      onChange: handleDateChange,
      minDate: resolveOptionalDateArg(minDate),
      maxDate: resolveOptionalDateArg(maxDate)
    }), renderSelectedDate(displaySelected)]));
  },
  args: {
    reverseYears: true
  }
}`,...W.parameters?.docs?.source}}};O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  render: (args: any) => {
    const {
      selectedDate,
      minDate,
      maxDate,
      onChange,
      onDateChange,
      ...rest
    } = args;
    const [selected, setSelected, displaySelected] = useStoryDateState(selectedDate);
    const handleDateChange = React.useCallback((date: Date | null) => {
      setSelected(date);
    }, []);
    return React.createElement('div', {
      style: {
        padding: '20px',
        maxWidth: '440px'
      }
    }, withKeys([React.createElement('h3', null, 'Smart Date Correction'), React.createElement('p', {
      style: {
        marginBottom: '12px'
      }
    }, 'Try selecting Jan 31, then switch month to February.'), React.createElement(SelectDatepicker, {
      ...rest,
      id: 'smart-correction',
      selectedDate: selected,
      onDateChange: handleDateChange,
      onChange: handleDateChange,
      minDate: resolveOptionalDateArg(minDate),
      maxDate: resolveOptionalDateArg(maxDate)
    }), renderSelectedDate(displaySelected)]));
  }
}`,...O.parameters?.docs?.source}}};A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  render: (args: any) => {
    const {
      selectedDate,
      minDate,
      maxDate,
      onChange,
      onDateChange,
      ...rest
    } = args;
    const [selected, setSelected, displaySelected] = useStoryDateState(selectedDate);
    const handleDateChange = React.useCallback((date: Date | null) => {
      setSelected(date);
    }, []);
    const resolvedMinDate = resolveOptionalDateArg(minDate) ?? new Date(2020, 0, 1);
    const resolvedMaxDate = resolveOptionalDateArg(maxDate) ?? new Date(2025, 11, 31);
    return React.createElement('div', {
      style: {
        padding: '20px',
        maxWidth: '460px'
      }
    }, withKeys([React.createElement('h3', null, 'Range Limits'), React.createElement('p', {
      style: {
        marginBottom: '12px'
      }
    }, 'Range: 2020-01-01 to 2025-12-31'), React.createElement(SelectDatepicker, {
      ...rest,
      id: 'range-limits',
      selectedDate: selected,
      onDateChange: handleDateChange,
      onChange: handleDateChange,
      minDate: resolvedMinDate,
      maxDate: resolvedMaxDate
    }), renderSelectedDate(displaySelected)]));
  }
}`,...A.parameters?.docs?.source}}};M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
  render: (args: any) => {
    const {
      selectedDate,
      minDate,
      maxDate,
      onChange,
      onDateChange,
      ...rest
    } = args;
    const [selected, setSelected, displaySelected] = useStoryDateState(selectedDate);
    const handleDateChange = React.useCallback((date: Date | null) => {
      setSelected(date);
    }, []);
    return React.createElement('div', {
      style: {
        padding: '20px',
        maxWidth: '420px'
      }
    }, withKeys([React.createElement('h3', null, 'Invalid Order Fallback'), React.createElement('p', {
      style: {
        marginBottom: '12px'
      }
    }, 'Passing an invalid order falls back to month/day/year.'), React.createElement(SelectDatepicker, {
      ...rest,
      id: 'invalid-order',
      selectedDate: selected,
      onDateChange: handleDateChange,
      onChange: handleDateChange,
      minDate: resolveOptionalDateArg(minDate),
      maxDate: resolveOptionalDateArg(maxDate)
    }), renderSelectedDate(displaySelected)]));
  },
  args: {
    order: 'month-year-day' as unknown as SelectDatepickerOrder
  }
}`,...M.parameters?.docs?.source}}};L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`{
  render: (args: any) => {
    const {
      selectedDate,
      minDate,
      maxDate,
      className,
      onChange,
      onDateChange,
      ...rest
    } = args;
    const [selected, setSelected, displaySelected] = useStoryDateState(selectedDate);
    const handleDateChange = React.useCallback((date: Date | null) => {
      setSelected(date);
    }, []);
    return React.createElement('div', {
      style: {
        padding: '20px',
        maxWidth: '880px'
      }
    }, withKeys([React.createElement('h3', null, 'Theming Overrides (CSS Vars)'), React.createElement('p', {
      style: {
        marginBottom: '12px'
      }
    }, 'These styles are applied via CSS custom properties on the root element.'), React.createElement(SelectDatepicker, {
      ...rest,
      id: 'theme-overrides',
      selectedDate: selected,
      onDateChange: handleDateChange,
      onChange: handleDateChange,
      minDate: resolveOptionalDateArg(minDate),
      maxDate: resolveOptionalDateArg(maxDate),
      className: className || 'rsd-theme-aurora'
    }), renderSelectedDate(displaySelected), React.createElement('style', null, \`.rsd-theme-aurora {
            --rsd-gap: 14px;
            --rsd-legend-font-size: 18px;
            --rsd-legend-font-weight: 700;
            --rsd-error-color: #dc2626;
            --rsd-select-padding: 12px 14px;
            --rsd-select-border: 1px solid rgba(15, 23, 42, 0.15);
            --rsd-select-border-radius: 14px;
            --rsd-select-font-size: 15px;
            --rsd-select-font-family: 'Inter', system-ui, -apple-system, 'Segoe UI', sans-serif;
            --rsd-select-hover-border: rgba(37, 99, 235, 0.55);
            --rsd-select-focus-border: #2563eb;
            --rsd-select-focus-ring: 0 0 0 4px rgba(37, 99, 235, 0.2);
            --rsd-select-disabled-bg: rgba(15, 23, 42, 0.06);
            --rsd-select-disabled-color: rgba(15, 23, 42, 0.45);
            --rsd-required-color: #16a34a;

            background: linear-gradient(135deg, rgba(14, 116, 144, 0.08), rgba(59, 130, 246, 0.06)),
              radial-gradient(circle at top right, rgba(16, 185, 129, 0.18), transparent 55%);
            padding: 22px 24px;
            border-radius: 20px;
            border: 1px solid rgba(59, 130, 246, 0.2);
            box-shadow: 0 20px 40px rgba(15, 23, 42, 0.08);
          }

          .rsd-theme-aurora .rsd__legend {
            color: #0f172a;
            letter-spacing: 0.02em;
          }

          .rsd-theme-aurora .rsd__select {
            background: rgba(255, 255, 255, 0.85);
            color: #0f172a;
            font-weight: 600;
            width: 100%;
            max-width: 100%;
            box-sizing: border-box;
          }

          .rsd-theme-aurora .rsd__select-row {
            flex-wrap: nowrap;
            gap: 16px;
          }

          .rsd-theme-aurora .rsd__label {
            text-transform: uppercase;
            letter-spacing: 0.08em;
            font-size: 12px;
            color: rgba(15, 23, 42, 0.6);
          }

          .rsd-theme-aurora .rsd__error-message {
            background: rgba(248, 113, 113, 0.12);
            padding: 10px 12px;
            border-radius: 12px;
            font-weight: 600;
          }\`)]));
  }
}`,...L.parameters?.docs?.source}}};_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  render: () => {
    return <div style={{
      padding: '20px',
      maxWidth: '480px'
    }}>\r
        <h3>Error Boundary</h3>\r
        <p style={{
        marginBottom: '12px'
      }}>\r
          This example intentionally throws to demonstrate the fallback UI.\r
        </p>\r
        <SelectDatepickerErrorBoundary renderFallback={error => <div role="alert" style={{
        padding: '12px',
        borderRadius: '8px',
        background: '#fff1f2',
        color: '#9f1239'
      }}>\r
              Error: {error.message}\r
            </div>}>\r
          <CrashOnRender />\r
        </SelectDatepickerErrorBoundary>\r
      </div>;
  }
}`,..._.parameters?.docs?.source}}};const Y=["Default","WithDateRange","WithCustomLabels","DifferentOrder","Disabled","WithErrorState","WithHiddenLabels","WithReverseYears","WithSmartDateCorrection","WithRangeLimits","WithInvalidOrderFallback","WithThemingOverrides","WithErrorBoundary"];export{b as Default,f as DifferentOrder,R as Disabled,v as WithCustomLabels,E as WithDateRange,_ as WithErrorBoundary,k as WithErrorState,w as WithHiddenLabels,M as WithInvalidOrderFallback,A as WithRangeLimits,W as WithReverseYears,O as WithSmartDateCorrection,L as WithThemingOverrides,Y as __namedExportsOrder,I as default};
