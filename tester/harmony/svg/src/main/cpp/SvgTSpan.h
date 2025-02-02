#pragma once
#include <cmath>
#include "SvgGraphic.h"
#include "SvgText.h"
#include <native_drawing/drawing_text_typography.h>
#include "SvgTextPath.h"
#include "utils/GlyphContext.h"

namespace rnoh {

constexpr double tau = 2.0 * M_PI;
constexpr double radToDeg = 360.0 / tau;

class SvgTSpan : public SvgGraphic, public SvgText {
public:
    SvgTSpan() {
        hrefFill_ = true;
        hrefRender_ = true;
        passStyle_ = true;
        inheritStyle_ = true;
        drawTraversed_ = true;
    }
    ~SvgTSpan() override = default;

    void OnDraw(OH_Drawing_Canvas *canvas) override;

    void SetParent(std::shared_ptr<SvgNode> parent) { parent_ = parent; }
    void SetContext(std::shared_ptr<GlyphContext> context) { glyphCtx_ = context; }
    
    double getTextAnchorOffset(TextAnchor textAnchor, const double &textMeasure);
    
    void getLinePath(std::string line, OH_Drawing_Canvas *canvas);
    
    std::string content;

private:
    void DrawText(OH_Drawing_Canvas* canvas);
    void DrawWrappedText(OH_Drawing_Canvas* canvas);

    std::shared_ptr<SvgNode> parent_;
    std::shared_ptr<SvgTextPath> textPath_;
    
};

} // namespace rnoh