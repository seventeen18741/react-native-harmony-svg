#pragma once
#include "RNOH/CppComponentInstance.h"
#include <folly/dynamic.h>
#include <math.h>
#include "SvgArkUINode.h"
#include "ShadowNodes.h"
#include "SvgPattern.h"

namespace rnoh {
class RNSVGPatternComponentInstance : public CppComponentInstance<facebook::react::RNSVGPatternShadowNode>, public SvgHost {

private:
    SvgArkUINode m_svgArkUINode;

public:
    RNSVGPatternComponentInstance(Context context);

    void onChildInserted(ComponentInstance::Shared const &childComponentInstance, std::size_t index) override {
        OnChildInsertCommon(std::dynamic_pointer_cast<SvgHost>(childComponentInstance));
    }

    void onChildRemoved(ComponentInstance::Shared const &childComponentInstance) override{}

    SvgArkUINode &getLocalRootArkUINode() override;

    void onPropsChanged(SharedConcreteProps const &props) override;

};
} // namespace rnoh