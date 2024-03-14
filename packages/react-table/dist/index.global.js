"use client"
(() => {
  var __defProp = Object.defineProperty;
  var __name = (target, value) => __defProp(target, "name", { value, configurable: true });
  var __require = /* @__PURE__ */ ((x) => typeof require !== "undefined" ? require : typeof Proxy !== "undefined" ? new Proxy(x, {
    get: (a, b) => (typeof require !== "undefined" ? require : a)[b]
  }) : x)(function(x) {
    if (typeof require !== "undefined")
      return require.apply(this, arguments);
    throw new Error('Dynamic require of "' + x + '" is not supported');
  });

  // src/useTable/index.ts
  var import_react2 = __require("react");
  var import_core = __require("@refinedev/core");
  var import_react_table = __require("@tanstack/react-table");

  // src/utils/useIsFirstRender/index.ts
  var import_react = __require("react");
  var useIsFirstRender = /* @__PURE__ */ __name(() => {
    const firstRender = (0, import_react.useRef)(true);
    (0, import_react.useEffect)(() => {
      firstRender.current = false;
    }, []);
    return firstRender.current;
  }, "useIsFirstRender");

  // src/useTable/index.ts
  function useTable({
    refineCoreProps: { hasPagination = true, ...refineCoreProps } = {},
    initialState: reactTableInitialState = {},
    ...rest
  }) {
    var _a, _b, _c;
    const isFirstRender = useIsFirstRender();
    const useTableResult = (0, import_core.useTable)({
      ...refineCoreProps,
      hasPagination
    });
    const isServerSideFilteringEnabled = (((_a = refineCoreProps.filters) == null ? void 0 : _a.mode) || "server") === "server";
    const isServerSideSortingEnabled = (((_b = refineCoreProps.sorters) == null ? void 0 : _b.mode) || "server") === "server";
    const hasPaginationString = hasPagination === false ? "off" : "server";
    const isPaginationEnabled = (((_c = refineCoreProps.pagination) == null ? void 0 : _c.mode) ?? hasPaginationString) !== "off";
    const {
      tableQueryResult: { data },
      current,
      setCurrent,
      pageSize: pageSizeCore,
      setPageSize: setPageSizeCore,
      sorters,
      setSorters,
      filters: filtersCore,
      setFilters,
      pageCount
    } = useTableResult;
    const logicalFilters = [];
    filtersCore.forEach((filter) => {
      if (filter.operator !== "or" && filter.operator !== "and" && "field" in filter) {
        logicalFilters.push(filter);
      }
    });
    const reactTableResult = (0, import_react_table.useReactTable)({
      data: (data == null ? void 0 : data.data) ?? [],
      getCoreRowModel: (0, import_react_table.getCoreRowModel)(),
      getSortedRowModel: isServerSideSortingEnabled ? void 0 : (0, import_react_table.getSortedRowModel)(),
      getFilteredRowModel: isServerSideFilteringEnabled ? void 0 : (0, import_react_table.getFilteredRowModel)(),
      initialState: {
        pagination: {
          pageIndex: current - 1,
          pageSize: pageSizeCore
        },
        sorting: sorters.map((sorting2) => ({
          id: sorting2.field,
          desc: sorting2.order === "desc"
        })),
        columnFilters: logicalFilters.map((filter) => ({
          id: filter.field,
          operator: filter.operator,
          value: filter.value
        })),
        ...reactTableInitialState
      },
      pageCount,
      manualPagination: true,
      manualSorting: isServerSideSortingEnabled,
      manualFiltering: isServerSideFilteringEnabled,
      ...rest
    });
    const { state, columns } = reactTableResult.options;
    const { pagination, sorting, columnFilters } = state;
    const { pageIndex, pageSize } = pagination ?? {};
    (0, import_react2.useEffect)(() => {
      if (pageIndex !== void 0) {
        setCurrent(pageIndex + 1);
      }
    }, [pageIndex]);
    (0, import_react2.useEffect)(() => {
      if (pageSize !== void 0) {
        setPageSizeCore(pageSize);
      }
    }, [pageSize]);
    (0, import_react2.useEffect)(() => {
      if (sorting !== void 0) {
        setSorters(
          sorting == null ? void 0 : sorting.map((sorting2) => ({
            field: sorting2.id,
            order: sorting2.desc ? "desc" : "asc"
          }))
        );
        if (sorting.length > 0 && isPaginationEnabled && !isFirstRender) {
          setCurrent(1);
        }
      }
    }, [sorting]);
    (0, import_react2.useEffect)(() => {
      const crudFilters = [];
      columnFilters == null ? void 0 : columnFilters.map((filter) => {
        var _a2, _b2;
        const operator = filter.operator ?? ((_b2 = (_a2 = columns.find((c) => c.id === filter.id)) == null ? void 0 : _a2.meta) == null ? void 0 : _b2.filterOperator);
        crudFilters.push({
          field: filter.id,
          operator: operator ?? (Array.isArray(filter.value) ? "in" : "eq"),
          value: filter.value
        });
      });
      const filteredArray = logicalFilters.filter(
        (value) => !crudFilters.some(
          (b) => value.field === b.field && value.operator === b.operator
        )
      );
      filteredArray == null ? void 0 : filteredArray.map((filter) => {
        crudFilters.push({
          field: filter.field,
          operator: filter.operator,
          value: void 0
        });
      });
      setFilters(crudFilters);
      if (crudFilters.length > 0 && isPaginationEnabled && !isFirstRender) {
        setCurrent(1);
      }
    }, [columnFilters]);
    return {
      ...reactTableResult,
      refineCore: useTableResult
    };
  }
  __name(useTable, "useTable");
})();
//# sourceMappingURL=index.global.js.map