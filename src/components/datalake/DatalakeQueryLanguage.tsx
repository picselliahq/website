import Link from "next/link";

export default function DatalakeQueryLanguage() {
  return (
    <section className="py-24 border-b border-[var(--border)] relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div
          className="w-full h-full"
          style={{
            backgroundImage: `linear-gradient(var(--system-indigo) 1px, transparent 1px), linear-gradient(90deg, var(--system-indigo) 1px, transparent 1px)`,
            backgroundSize: "48px 48px",
          }}
        />
      </div>

      <div className="max-w-6xl mx-auto px-6 relative">
        <div className="text-center mb-16">
          <span className="text-[var(--system-indigo)] text-sm font-medium uppercase tracking-wider mb-3 block">
            Python SDK
          </span>
          <h2 className="text-3xl md:text-4xl font-semibold mb-4">
            Powerful Data Querying
          </h2>
          <p className="text-[var(--secondary-label)] max-w-2xl mx-auto">
            Query your datalake programmatically with the Python SDK. Filter by
            tags, metadata, and more with full type hints and auto-completion.
          </p>
        </div>

        {/* Query Parameters Reference */}
        <div className="grid lg:grid-cols-3 gap-6 mb-12">
          {/* list_data params */}
          <div className="card p-0 overflow-hidden">
            <div className="px-4 py-3 border-b border-[var(--border)] bg-[var(--tertiary-system-background)]">
              <span className="text-xs font-medium text-[var(--system-indigo)]">
                list_data() PARAMS
              </span>
            </div>
            <div className="p-4 bg-[var(--black)] font-mono text-xs space-y-2">
              <div className="flex justify-between">
                <span className="text-[var(--label)]">tags</span>
                <span className="text-[var(--tertiary-label)]">List[str]</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[var(--label)]">custom_metadata</span>
                <span className="text-[var(--tertiary-label)]">
                  Dict[str, Any]
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-[var(--label)]">limit</span>
                <span className="text-[var(--tertiary-label)]">int</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[var(--label)]">offset</span>
                <span className="text-[var(--tertiary-label)]">int</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[var(--label)]">order_by</span>
                <span className="text-[var(--tertiary-label)]">str</span>
              </div>
            </div>
          </div>

          {/* Tag Operations */}
          <div className="card p-0 overflow-hidden">
            <div className="px-4 py-3 border-b border-[var(--border)] bg-[var(--tertiary-system-background)]">
              <span className="text-xs font-medium text-[var(--system-orange)]">
                TAG OPERATIONS
              </span>
            </div>
            <div className="p-4 bg-[var(--black)] font-mono text-xs space-y-2">
              <div className="flex justify-between">
                <span className="text-[var(--label)]">add_tags()</span>
                <span className="text-[var(--tertiary-label)]">
                  add to data
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-[var(--label)]">remove_tags()</span>
                <span className="text-[var(--tertiary-label)]">
                  remove from data
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-[var(--label)]">list_tags()</span>
                <span className="text-[var(--tertiary-label)]">
                  get all tags
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-[var(--label)]">create_tag()</span>
                <span className="text-[var(--tertiary-label)]">
                  create new tag
                </span>
              </div>
            </div>
          </div>

          {/* Filterable Properties */}
          <div className="card p-0 overflow-hidden">
            <div className="px-4 py-3 border-b border-[var(--border)] bg-[var(--tertiary-system-background)]">
              <span className="text-xs font-medium text-[var(--picsellia-green)]">
                FILTERABLE
              </span>
            </div>
            <div className="p-4 bg-[var(--black)] font-mono text-xs space-y-2">
              <div className="flex justify-between">
                <span className="text-[var(--label)]">tags</span>
                <span className="text-[var(--tertiary-label)]">DataTags</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[var(--label)]">custom_metadata</span>
                <span className="text-[var(--tertiary-label)]">
                  custom fields
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-[var(--label)]">filename</span>
                <span className="text-[var(--tertiary-label)]">asset name</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[var(--label)]">created_at</span>
                <span className="text-[var(--tertiary-label)]">timestamps</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[var(--label)]">type</span>
                <span className="text-[var(--tertiary-label)]">
                  image/video
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Interactive Query Builder */}
        <div className="card p-0 overflow-hidden">
          <div className="flex items-center justify-between px-4 py-3 border-b border-[var(--border)] bg-[var(--tertiary-system-background)]">
            <div className="flex items-center gap-3">
              <div className="w-3 h-3 rounded-full bg-[var(--system-red)]/60" />
              <div className="w-3 h-3 rounded-full bg-[var(--system-yellow)]/60" />
              <div className="w-3 h-3 rounded-full bg-[var(--system-green)]/60" />
              <span className="text-xs text-[var(--tertiary-label)]">
                advanced_query.py
              </span>
            </div>
            <div className="flex items-center gap-2">
              <span className="px-2 py-0.5 rounded text-[10px] bg-[var(--picsellia-green)]/10 text-[var(--picsellia-green)]">
                auto-complete
              </span>
              <span className="px-2 py-0.5 rounded text-[10px] bg-[var(--picsellia-blue)]/10 text-[var(--picsellia-blue)]">
                type hints
              </span>
            </div>
          </div>
          <div className="grid lg:grid-cols-2 divide-y lg:divide-y-0 lg:divide-x divide-[var(--border)]">
            {/* Query Input */}
            <div className="p-6 bg-[var(--black)]">
              <pre className="font-mono text-sm leading-relaxed">
                <code>
                  <span className="text-[var(--tertiary-label)]">
                    # Advanced data query
                  </span>
                  {"\n"}
                  <span className="text-[var(--label)]">data</span>{" "}
                  <span className="text-[var(--system-indigo)]">=</span>{" "}
                  <span className="text-[var(--label)]">
                    datalake.list_data(
                  </span>
                  {"\n"}
                  {"  "}
                  <span className="text-[var(--tertiary-label)]">
                    # Filter by tags
                  </span>
                  {"\n"}
                  {"  "}
                  <span className="text-[var(--label)]">tags</span>
                  <span className="text-[var(--system-indigo)]">=</span>
                  <span className="text-[var(--label)]">[</span>
                  {"\n"}
                  {"    "}
                  <span className="text-[var(--picsellia-green)]">
                    &quot;production&quot;
                  </span>
                  <span className="text-[var(--label)]">,</span>
                  {"\n"}
                  {"    "}
                  <span className="text-[var(--picsellia-green)]">
                    &quot;validated&quot;
                  </span>
                  {"\n"}
                  {"  "}
                  <span className="text-[var(--label)]">],</span>
                  {"\n"}
                  {"  "}
                  <span className="text-[var(--tertiary-label)]">
                    # Filter by custom_metadata
                  </span>
                  {"\n"}
                  {"  "}
                  <span className="text-[var(--label)]">custom_metadata</span>
                  <span className="text-[var(--system-indigo)]">=</span>
                  <span className="text-[var(--label)]">{"{"}</span>
                  {"\n"}
                  {"    "}
                  <span className="text-[var(--picsellia-green)]">
                    &quot;location&quot;
                  </span>
                  <span className="text-[var(--label)]">:</span>{" "}
                  <span className="text-[var(--picsellia-green)]">
                    &quot;factory-A&quot;
                  </span>
                  {"\n"}
                  {"  "}
                  <span className="text-[var(--label)]">{"}"},</span>
                  {"\n"}
                  {"  "}
                  <span className="text-[var(--label)]">limit</span>
                  <span className="text-[var(--system-indigo)]">=</span>
                  <span className="text-[var(--system-orange)]">1000</span>
                  {"\n"}
                  <span className="text-[var(--label)]">)</span>
                  {"\n\n"}
                  <span className="text-[var(--system-indigo)]">for</span>{" "}
                  <span className="text-[var(--label)]">item</span>{" "}
                  <span className="text-[var(--system-indigo)]">in</span>{" "}
                  <span className="text-[var(--label)]">data:</span>
                  {"\n"}
                  {"  "}
                  <span className="text-[var(--label)]">
                    print(item.filename)
                  </span>
                </code>
              </pre>
            </div>
            {/* Results */}
            <div className="p-6 bg-[var(--tertiary-system-background)]">
              <div className="mb-4">
                <div className="text-xs text-[var(--tertiary-label)] mb-2">
                  EXECUTION
                </div>
                <div className="flex items-center gap-6 text-sm">
                  <div>
                    <span className="text-[var(--picsellia-green)] font-mono font-bold">
                      2,847
                    </span>
                    <span className="text-[var(--tertiary-label)] ml-1">
                      results
                    </span>
                  </div>
                  <div>
                    <span className="text-[var(--picsellia-blue)] font-mono font-bold">
                      23ms
                    </span>
                    <span className="text-[var(--tertiary-label)] ml-1">
                      query time
                    </span>
                  </div>
                  <div>
                    <span className="text-[var(--system-orange)] font-mono font-bold">
                      847MB
                    </span>
                    <span className="text-[var(--tertiary-label)] ml-1">
                      scanned
                    </span>
                  </div>
                </div>
              </div>
              <div className="space-y-2">
                <div className="text-xs text-[var(--tertiary-label)]">
                  MATCHED TAGS
                </div>
                <div className="flex flex-wrap gap-2">
                  <span className="px-2 py-1 rounded text-xs bg-[var(--picsellia-green)]/10 text-[var(--picsellia-green)]">
                    production (1,892)
                  </span>
                  <span className="px-2 py-1 rounded text-xs bg-[var(--picsellia-green)]/10 text-[var(--picsellia-green)]">
                    validated (2,103)
                  </span>
                  <span className="px-2 py-1 rounded text-xs bg-[var(--picsellia-blue)]/10 text-[var(--picsellia-blue)]">
                    factory-A (1,245)
                  </span>
                  <span className="px-2 py-1 rounded text-xs bg-[var(--picsellia-blue)]/10 text-[var(--picsellia-blue)]">
                    factory-B (892)
                  </span>
                </div>
              </div>
              <div className="mt-4 pt-4 border-t border-[var(--border)]">
                <div className="flex items-center justify-between">
                  <span className="text-xs text-[var(--tertiary-label)]">
                    Ready to create dataset
                  </span>
                  <button className="px-3 py-1.5 rounded-lg text-xs font-medium bg-[var(--system-indigo)] text-white">
                    Create Dataset →
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
