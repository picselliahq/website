"use client";

import { useTranslations } from 'next-intl';

export default function DeploymentSDK() {
  const t = useTranslations('modelDeployment.sdk');
  return (
    <section className="py-24 border-b border-[var(--border)] relative overflow-hidden">
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-[var(--system-orange)]/5 rounded-full blur-[100px]" />

      <div className="max-w-6xl mx-auto px-6 relative">
        <div className="text-center mb-16">
          <span className="text-[var(--system-orange)] text-sm font-medium uppercase tracking-wider mb-3 block">
            {t('badge')}
          </span>
          <h2 className="text-3xl md:text-4xl font-semibold mb-4">
            {t('title')}
          </h2>
          <p className="text-[var(--secondary-label)] max-w-2xl mx-auto">
            {t('subtitle')}
          </p>
        </div>

        {/* SDK Code blocks */}
        <div className="grid lg:grid-cols-2 gap-6 mb-12">
          <div className="card p-0 overflow-hidden">
            <div className="flex items-center justify-between px-4 py-3 border-b border-[var(--border)] bg-[var(--tertiary-system-background)]">
              <span className="text-xs font-medium text-[var(--system-red)]">
                {t('deployModel')}
              </span>
              <span className="text-xs text-[var(--tertiary-label)]">
                {t('pythonSdk')}
              </span>
            </div>
            <pre className="p-5 text-xs font-mono leading-relaxed overflow-x-auto bg-[var(--black)]">
              <code>
                <span className="text-[var(--tertiary-label)]">
                  # Connect and get deployment
                </span>
                {"\n"}
                <span className="text-[var(--system-red)]">from</span>{" "}
                <span className="text-[var(--label)]">picsellia</span>{" "}
                <span className="text-[var(--system-red)]">import</span>{" "}
                <span className="text-[var(--label)]">Client</span>
                {"\n\n"}
                <span className="text-[var(--label)]">client</span>{" "}
                <span className="text-[var(--system-red)]">=</span>{" "}
                <span className="text-[var(--label)]">Client()</span>
                {"\n\n"}
                <span className="text-[var(--tertiary-label)]">
                  # Create deployment with model
                </span>
                {"\n"}
                <span className="text-[var(--label)]">deployment</span>{" "}
                <span className="text-[var(--system-red)]">=</span>{" "}
                <span className="text-[var(--label)]">
                  client.create_deployment(
                </span>
                {"\n"}
                {"  "}
                <span className="text-[var(--label)]">name</span>
                <span className="text-[var(--system-red)]">=</span>
                <span className="text-[var(--picsellia-green)]">
                  &quot;prod-v3&quot;
                </span>
                {"\n"}
                <span className="text-[var(--label)]">)</span>
                {"\n"}
                <span className="text-[var(--label)]">
                  deployment.set_model(model_version)
                </span>
              </code>
            </pre>
          </div>

          <div className="card p-0 overflow-hidden">
            <div className="flex items-center justify-between px-4 py-3 border-b border-[var(--border)] bg-[var(--tertiary-system-background)]">
              <span className="text-xs font-medium text-[var(--system-red)]">
                {t('runInference')}
              </span>
              <span className="text-xs text-[var(--tertiary-label)]">
                {t('pythonSdk')}
              </span>
            </div>
            <pre className="p-5 text-xs font-mono leading-relaxed overflow-x-auto bg-[var(--black)]">
              <code>
                <span className="text-[var(--tertiary-label)]">
                  # Run prediction from file path
                </span>
                {"\n"}
                <span className="text-[var(--label)]">result</span>{" "}
                <span className="text-[var(--system-red)]">=</span>{" "}
                <span className="text-[var(--label)]">deployment.predict(</span>
                {"\n"}
                {"  "}
                <span className="text-[var(--picsellia-green)]">
                  &quot;image.jpg&quot;
                </span>
                {"\n"}
                <span className="text-[var(--label)]">)</span>
                {"\n\n"}
                <span className="text-[var(--tertiary-label)]">
                  # Run prediction from bytes
                </span>
                {"\n"}
                <span className="text-[var(--label)]">result</span>{" "}
                <span className="text-[var(--system-red)]">=</span>{" "}
                <span className="text-[var(--label)]">
                  deployment.predict_bytes(
                </span>
                {"\n"}
                {"  "}
                <span className="text-[var(--picsellia-green)]">
                  &quot;image.jpg&quot;
                </span>
                <span className="text-[var(--label)]">,</span>
                {"\n"}
                {"  "}
                <span className="text-[var(--label)]">raw_image</span>
                {"\n"}
                <span className="text-[var(--label)]">)</span>
                {"\n\n"}
                <span className="text-[var(--tertiary-label)]">
                  # Send to monitoring
                </span>
                {"\n"}
                <span className="text-[var(--label)]">deployment.monitor(</span>
                <span className="text-[var(--picsellia-green)]">
                  &quot;image.jpg&quot;
                </span>
                <span className="text-[var(--label)]">)</span>
              </code>
            </pre>
          </div>
        </div>

        {/* API endpoint preview */}
        <div className="card p-0 overflow-hidden">
          <div className="flex items-center justify-between px-4 py-3 border-b border-[var(--border)] bg-[var(--tertiary-system-background)]">
            <span className="text-xs font-medium text-[var(--picsellia-green)]">
              {t('restApi')}
            </span>
            <span className="text-xs text-[var(--tertiary-label)]">cURL</span>
          </div>
          <pre className="p-5 text-xs font-mono leading-relaxed overflow-x-auto bg-[var(--black)]">
            <code>
              <span className="text-[var(--tertiary-label)]">
                # Direct API call
              </span>
              {"\n"}
              <span className="text-[var(--system-red)]">curl</span>{" "}
              <span className="text-[var(--label)]">-X POST</span>{" "}
              <span className="text-[var(--picsellia-green)]">
                &quot;https://serving.picsellia.com/v1/predict&quot;
              </span>{" "}
              <span className="text-[var(--label)]">\</span>
              {"\n"}
              {"  "}
              <span className="text-[var(--label)]">-H</span>{" "}
              <span className="text-[var(--picsellia-green)]">
                &quot;Authorization: Bearer $API_KEY&quot;
              </span>{" "}
              <span className="text-[var(--label)]">\</span>
              {"\n"}
              {"  "}
              <span className="text-[var(--label)]">-F</span>{" "}
              <span className="text-[var(--picsellia-green)]">
                &quot;image=@photo.jpg&quot;
              </span>{" "}
              <span className="text-[var(--label)]">\</span>
              {"\n"}
              {"  "}
              <span className="text-[var(--label)]">-F</span>{" "}
              <span className="text-[var(--picsellia-green)]">
                &quot;deployment_id=dep_abc123&quot;
              </span>
            </code>
          </pre>
        </div>
      </div>
    </section>
  );
}
